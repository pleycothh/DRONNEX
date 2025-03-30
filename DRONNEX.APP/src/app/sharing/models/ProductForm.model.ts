import { ProductEntity } from './productEntity.model';
import { ProductLookup } from './productLookup.model';

export interface ProductForm {
    productEntity: ProductEntity;
    productLookups: ProductLookup;
}