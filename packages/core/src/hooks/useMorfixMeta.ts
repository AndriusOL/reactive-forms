import { useStockValue } from 'stocked';

import { useMorfixContext } from './useMorfixContext';
import { META_KEY_GLOBAL_META } from '../constants';
import { FormMeta } from '../typings/FormMeta';
import { MorfixMeta } from '../typings/MorfixMeta';
import { joinPaths } from '../utils/joinPaths';

export const useMorfixMeta = <V>(name: keyof FormMeta): V => {
    const { formMeta } = useMorfixContext();

    return useStockValue<V, MorfixMeta<object>>(joinPaths(META_KEY_GLOBAL_META, name), formMeta);
};
