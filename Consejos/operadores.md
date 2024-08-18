 "Y" Lógico (&&):
Asociación: Piensa en el "Y" lógico como un semáforo. Ambos coches (condiciones) deben tener luz verde (ser true) para que puedas avanzar. Si uno de ellos tiene luz roja (es false), no puedes avanzar.

Concepto: Solo es true si ambas condiciones son true.

Ejemplo: A && B es true solo si A es true y B es true.

Truco visual: 🟢 Y 🟢 = 🟢 (Avanza) / 🟢 Y 🔴 = 🔴 (No avanza)

<br>
<br>

2. "O" Lógico (||):
Asociación: Imagina que estás en una casa con dos puertas. Puedes entrar si al menos una de las puertas está abierta (true). Si ambas puertas están cerradas (false), no puedes entrar.

Concepto: Es true si al menos una de las condiciones es true.

Ejemplo: A || B es true si A es true, o B es true, o ambos son true.

Truco visual: 🔓 O 🔓 = 🔓 (Puedes entrar) / 🔒 O 🔒 = 🔒 (No puedes entrar)

<br>
<br>

3. "No" Lógico (!):
Asociación: Piensa en esto como un interruptor que invierte el valor. Si está encendido (true), lo apagas (false). Si está apagado (false), lo enciendes (true).

Concepto: Invierte el valor de la condición.

Ejemplo: !A es true si A es false y viceversa.

Truco visual: ❌🔥 = 🌊 (Apaga el fuego) / ❌🌊 = 🔥 (Enciende el fuego)

<br>
<br>

4. "XOR" (Operador exclusivo o):
Asociación: Piensa en una llave de luz con dos interruptores en diferentes lugares. La luz se enciende solo si uno de los interruptores está en la posición true, pero si ambos están en la misma posición (true-true o false-false), la luz está apagada.

Concepto: Es true si exactamente una de las condiciones es true.

Ejemplo: A ^ B es true si A es true o B es true, pero no ambos.

Truco visual: 🟢🔴 = 🟢 (Encendido) / 🟢🟢 = 🔴 (Apagado)

<br>

| Operador     | Descripción | Ejemplo Cotidiano |
|--------------|-------------|-------------------|
| **AND (&&)** | Ambos deben ser `true` para ser `true`. | "Puedo salir solo si tengo dinero y tiempo libre." |
| **OR (or)**  | Al menos uno debe ser `true` para ser `true`. | "Puedo comer pizza o hamburguesa." |
| **NOT (!)**  | Invierte el valor (`true` se convierte en `false` y viceversa). | "No está lloviendo." (Es `true` si no está lloviendo) |
| **XOR**      | Uno y solo uno debe ser `true` para ser `true`. | "O voy al cine o veo una película en casa, pero no ambos." |
