# Programar el reinicio del ordenador de forma automática mediante **Cron**
#### 04/01/2021

Últimamente he tenido bastantes problemas de conexión de la *Raspberry Pi*, cuando pasaban 2 ó 3 días sin reiniciarla (lo cual es algo habitual), a veces se bloqueaba y no podía acceder vía **ssh**, con lo que no podía reiniciarla hasta llegar a casa.
Como hay ciertas horas, de madrugada, que la *Pi* no se utiliza, he decido que se reinicie todos los días a una determinada hora. Para esto la mejor solución es **Cron**.

Lo primero es abrir un terminal y escribir:

    sudo crontab -e

Una vez añadido hay que añadirle una línea con la siguiente estructura:

    min hor dom mon dow comando

 - min: minuto en el que se va a ejecutar el comando, de 0 a 59
 - hor: hora en la que se va a ejecutar el comando, de 0 a 23
 - dom: día del mes en el que se va a ejecutar el comando, de 1 a 31. Si queremos que se ejecute todos los días hay que cambiarlo por un *
 - mon: mes en el que se va a ejecutar el comando, de 1 a 12. Si queremos que se ejecute todos los meses hay que cambiarlo por un *
 - dow: día de la semana que se va a ejecutar el comando, de 0 a 6. Si pones un 0 el domingo, y si pones un 6 el sábado. Si queremos que se ejecute todos los días hay que cambiarlo por un *
 - comando: el comando que se ejecuta, en nuestro caso `/sbin/reboot -h now`

Para que se reinicie todos los días a las 4:00 quedaría asi:


 
Algo muy sencillo que me ha traído de cabeza ha sido activar el *scroll* en **tmux**. Me hacía falta porque en **Linux** es fundamental leer lo que pasa en la terminal, además cuando intentas ir hacia arriba van saliendo los últimos comandos, como cuando le das al botón de *flecha arriba* de nuestro teclado.

![VueJs](https://clonbg.netlify.app/vuex-nuxt-example/vuex.png)

Solo hay que crear un archivo de configuración de *tmux* y añadirle la opción, esto se puede hacer con tan solo una linea en nuestra terminal:

    "set -g mouse on" >> ~/.tmux.conf

Después de esto tienes que volver a abrir *tmux* y ya lo tienes

Visto en [https://superuser.com](https://superuser.com/questions/209437/how-do-i-scroll-in-tmux)

Salu2
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTczNjM3NTc1NywtNTEwOTk3ODE1LC00Mj
M2OTA4OV19
-->