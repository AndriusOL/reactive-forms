import { FormShared, Plugin } from '@reactive-forms/core';

export const xPlugin: Plugin = {
    token: Symbol.for('x'),
    useDecorator: <T extends object>(form: FormShared<T>) => form
};