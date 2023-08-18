# Enviar OTP (One Time Password)

Envía un OTP (One Time Password) al correo electrónico proporcionado en el cuerpo de la solicitud.
## <span style='color: #81d294;'>POST</span> /otp

```bash
curl --request POST \
  --url {baseUrl}/otp \
  --header 'Content-Type: application/json' \
  --data '{
	"username": "example@koibanx.com"
}'
```

## Parámetros de la solicitud

El cuerpo de la solicitud debe ser un objeto JSON con los siguientes parámetros:
- `username`: Correo electrónico al que se enviará el OTP.
## Respuestas posibles

- `200 OK`: Se envió el OTP correctamente al correo electrónico proporcionado. La respuesta estará vacía.

- `4xx Invalid Parameters`: Se encontraron parámetros inválidos en la solicitud. El cuerpo de la respuesta contendrá información adicional sobre el error.


### Diagrama de flujo:
![Send OTP](./SendOTP.png)