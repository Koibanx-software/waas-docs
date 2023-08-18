# Tokens

Dentro del _core_ de **_WaaS_**, los tokens cumplen el rol de activos digitales, utilizados para realizar operaciones:

## Tipos de Tokens

### Default Token

No existe una wallet centralizadora. Los tokens se crean (mint) directamente en las wallets de los usuarios locales y con este token se pueden hacer las operaciones de mint, transfer y burn, desde y hacia las wallets de los usuarios locales.

### CentrallizedSupplyToken

Existe una wallet centralizada. Los tokens se crean (mint) solamente en esta wallet centralizada, después, se distribuyen a las wallets de los usuarios locales desde la wallet centralizada, Al final, los tokens pueden ser devueltos a la wallet centralizada o quemados directamente del usuario local. Este token puede hacer las operaciones de transfer y burn, desde y hacia las wallets de los usuarios locales.

## Operaciones

1. **Mint (generación)**: Creación de nuevos tokens.
2. **Burn**: Proceso de eliminación de tokens.
3. **Transfer**: Intercambios de tokens entre usuarios locales.
4. **Distribución**: Movimiento de tokens desde la wallet centralizada hacia las wallets de los usuarios locales (esta es una operacion masiva ya que se recibe una lista de usuarios y cuantos tokens se van a distribuir).

Contenido:

-   [Crear](./create/create.md)
-   [Obtener Detalles](./find/findById.md)
-   [Mint](./mint/mint.md)
-   [Burn](./burn/burn.md)
-   [Transfer](./transfer/transfer.md)
-   [Mint a centrall wallet](./mintToCentralWallet/mintCentralized.md)
-   [Distribución](./distribution/create.md)
-   [Obtener detalles de una distribución](./distribution/findById.md)
