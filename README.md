# FC-Producto-card

Este es un paquete de pruebas de despligues en NPM

### FernandoCM

## Ejemplo 

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'fc-product-card';
```

```
 <ProductCard 
    product={product}
    initialValues={{
        count: 4,
        maxCount: 10
    }}
>
    {
        ({reset, increaseBy, count, isMaxCountReached, maxCount}) => (
            <>
                <ProductImage />
                <ProductTitle />
                <ProductButtons />
            </>
        )
    }
</ProductCard>

```
