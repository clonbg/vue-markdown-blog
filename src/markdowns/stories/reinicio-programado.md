# Programar el reinicio del ordenador de forma automática mediante **Cron**
#### 04/01/2021

Últimamente he tenido bastantes problemas de conexión de la *Raspberry Pi*, cuando pasaban 2 ó 3 días sin reiniciarla (lo cual es algo habitual), a veces se bloqueaba y no podía acceder vía **ssh**, con lo que no podía reiniciarla hasta llegar a casa.
Como hay ciertas horas, de madrugada, que la *Pi* no se utiliza, he decido que se reinicie todos los días a una determinada hora. Para esto la mejor solución es **Cron**.

Lo primero es abrir un terminal y escribir:

    sudo crontab -e



Algo muy sencillo que me ha traído de cabeza ha sido activar el *scroll* en **tmux**. Me hacía falta porque en **Linux** es fundamental leer lo que pasa en la terminal, además cuando intentas ir hacia arriba van saliendo los últimos comandos, como cuando le das al botón de *flecha arriba* de nuestro teclado.

![VueJs](https://clonbg.netlify.app/vuex-nuxt-example/vuex.png)

Solo hay que crear un archivo de configuración de *tmux* y añadirle la opción, esto se puede hacer con tan solo una linea en nuestra terminal:

    "set -g mouse on" >> ~/.tmux.conf

Después de esto tienes que volver a abrir *tmux* y ya lo tienes

Visto en [https://superuser.com](https://superuser.com/questions/209437/how-do-i-scroll-in-tmux)

Salu2
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTgzNzc5NDU1OCwtNTEwOTk3ODE1LC00Mj
M2OTA4OV19
-->