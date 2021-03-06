import * as hhTrudMappingJson from './data/GITIGNORE__index4_hhTrudMapping.json';
import * as trudAllRegionsJson from './data/GITIGNORE__index4_trudAllRegions.json';
import {chain, each, findKey, forEach, mapKeys} from 'lodash';

interface HhTrudMappingInEntry {
    hhId: string;
    hhName: string;
    trudName: string;
}

interface HhTrudMappingOutEntry extends HhTrudMappingInEntry {
    trudId: string;
}

const hhTrudMapping: HhTrudMappingInEntry[] = hhTrudMappingJson;
//{ [trudId]: trudName }
const trudAllRegions: Record<string, string> = trudAllRegionsJson;
// const trudAllRegionsKeys = Object.keys(trudAllRegions);

const regionsOut = hhTrudMapping.map(value => {
    const trudId = findKey(trudAllRegions, trudRegionName => trudRegionName === value.trudName);
    if (!trudId) {
        throw new Error('trudId is undefined');
    }

    return {
        ...value,
        trudId
    } as HhTrudMappingOutEntry;
});

// const regionsMapOut = regionsOut.reduce((result, {hhId, trudId}) => {
//     result[hhId] = trudId;
//     return result;
// }, {} as Record<string, string>);

const regionsMapOut = chain(regionsOut)
    .keyBy('hhId')
    .mapValues(({trudId, trudName}) => ({trudId, trudName}))
    .value();

//console.log(JSON.stringify(regionsMapOut, undefined, 2));
forEach(regionsMapOut, ({trudId, trudName}, key) => {
    console.log(`case "${key}" -> new DictionaryEntryOutDto("${trudId}", "${trudName}");`);
});
