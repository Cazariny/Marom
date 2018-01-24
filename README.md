#Marom

Marom es un idioma inventado para el [Curso Fundamentos de JavaScript](https://platzi.com/js) de [Platzi](https://platzi.com)

## Descripcion del idioma

- Si la palabra termina en "ar", se le quitan esos dos caracteres
- Si la palabra inicia con Z, se le añade "pe" al final
- Si la palabra traducida tiene 10 o más letras, se debe partir a la mitad y unir con un guión del medio
- Si la palabra original es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra intercalando mayúsculas y minúsculas

##Instalacion

```

npm install marom
```

## Uso

```
import marom from 'marom'

marom("Programar") // Program
```

## Creditos
- [Mario Cazares] (https://twitter.com/CazNeo)

## Licencia
[MIT] (https://opensource.org/licenses/MIT)
