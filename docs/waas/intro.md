---
title: "Introducción"
sidebar_position: 1
---

# WaaS API - Wallet As A Service

WaaS (Wallet as a Service) es una API que permite a las aplicaciones tokenizar y transaccionar cualquier tipo de activo o valor.

### Proyectos

Los proyectos en WaaS son el core y es allí donde se hacen cada una de las operaciones principales. Cada proyecto opera de manera aislada. Es decir, la información y operaciones dentro de un proyecto no son accesibles por otros proyectos. En cada uno, hay dos entidades principales: `tokens` y `usuarios locales`.

### Autenticación

Para utilizar la API de WaaS, es necesario crear un `usuario global` y autenticarse. Un `usuario global` puede tener varios proyectos, y cada proyecto tiene su propio `apiKey` y `secret`, que se utilizan para acceder a los endpoints de la API.

### Dashboard

Ademas de la API, WaaS proporciona un dashboard donde se puede ver y gestionar información del proyecto. Este dashboard ofrece todas las funciones de la API pero de manera manual y administrativa. Para acceder a estos endpoints, se requiere la autenticación del `usuario global` propietario del proyecto y del `apiKey` del proyecto en cuestión.

### Usuarios Locales

Los `usuarios locales` actúan como `wallets` para los tokens y son identificados por un `id` y un `usename`. No se requiere autenticación adicional para estos usuarios ya que todo se accede a través de la `apiKey` y `secret` del proyecto. WaaS ofrece operaciones CRUD para los `usuarios locales`.

### Tokens

Los `tokens` pueden ser creados y gestionados dentro de cada proyecto. Las operaciones principales incluyen `mint` (creación), `burn` (eliminación), `transfer` (transferencia) y `distribution` (distribución, solo para tokens de tipo `centralizedSupply`). Se puede consultar el balance de un usuario en cada token creado a través de un endpoint específico.

Recuerda que cada endpoint tiene una versión para ser accedida desde el dashboard y otra para ser accedida desde la integración del cliente.

## MVP

En este primer MVP el producto de Wallet As a Services se ha desarrollado como una API que permite a las aplicaciones tokenizar y transaccionar cualquier tipo de activo o valor. En este desarrollo el usuario puede llegar a crear una cuenta hasta transaccionar tokens.

A su vez, contamos con Dashboard de administración para el cliente (usuario global); con SDK que permite integrar mejor la API; así como una landing page donde se puede consultar la información.

Contenido:

- [GlobalUser](./global-user/global-user.md)
  - [Crear](./global-user/create/create.md)
  - [Obtener Perfil](./global-user/getProfile/getProfile.md)
  - [Iniciar sesión](./global-user/signIn/signIn.md)
  - [Iniciar sesión OTP](./global-user/signInOtp/signInOtp.md)
  - [Enviar OTP](./global-user/sendOtp/sendOtp.md)
  - [Asignar Contraseña](./global-user/assignPassword/assignPassword.md)
- [Proyectos](./project/project.md)
  - [Crear](./project/create/create.md)
  - [Generar nuevo secreto](./project/update/generateNewSecret.md)
- [Autenticación](./auth/auth.md)
- [Tokens](./tokens/tokens.md)
  - [Crear](./tokens/create/create.md)
  - [Obtener Detalles](./tokens/find/findById.md)
  - [Mint](./tokens/mint/mint.md)
  - [Burn](./tokens/burn/burn.md)
  - [Transfer](./tokens/transfer/transfer.md)
  - [Mint a centrall wallet](./tokens/mintToCentralWallet/mintCentralized.md)
  - [Distribución](./tokens/distribution/create.md)
  - [Obtener detalles de una distribución](./tokens/distribution/findById.md)
- [Usuarios](./user/user.md)
  - [Crear](./user/create/create.md)
  - [Obtener Detalles](./user/find/findById.md)
  - [Obtener Todos](./user/find/findAll.md)
- [Balances](./balance/balance.md)
  - [Obtener Balances de un Usuario](./balance/find/findByUserId.md)
- [Transacciones](./transaction/transaction.md)
  - [Obtener detalles](./transaction/find/find.md)
  - [Obtener todos](./transaction/find/findAll.md)
