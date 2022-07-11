declare global {
    interface Function {
        get callThis(): <V, R>(this: (this: V) => R) => (value: V) => R;
    }
}

export {};
