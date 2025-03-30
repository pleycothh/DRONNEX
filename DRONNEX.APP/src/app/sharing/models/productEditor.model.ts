import { ProductForm } from './ProductForm.model';
import { ProductResult } from './productResult.model';

export interface ProductEditor {
    productForm: ProductForm;
    productResult: ProductResult;
}