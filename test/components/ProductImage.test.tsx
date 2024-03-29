import React from 'react';
import renderer from 'react-test-renderer';
import { ProductImage, ProductCard } from '../../src/components/index';
import { product2 } from '../data/product';

describe('ProductImage', () => {

    test('Debe de mostrar el componente correctamente con la imagen personalizada', () => {
        const wrapper = renderer.create(
            <ProductImage img="https://hola.jpg" />
        )

        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    test('Debe de mostrar el componente con la imagen del producto', () => {
        const wrapper = renderer.create(
            <ProductCard product={product2}>
                {
                    () => (
                        <ProductImage />
                    )
                }
            </ProductCard>
        )

        expect(wrapper.toJSON()).toMatchSnapshot();
    });
})
