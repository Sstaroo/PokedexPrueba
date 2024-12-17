# **Pokédex en Vue.js**  

Pokedex desarrollada con Vue.js para la práctica profesional en Clay Technologies.

---

## **Características Principales**  

1. **Lista de Pokémon**:  
   Muestra una lista paginada de los primeros 150 Pokémon obtenidos desde la PokeAPI.  
2. **Detalles del Pokémon**:  
   Accede a información detallada de cada Pokémon, como sus imágenes, tipos, habilidades, peso y altura.  
3. **Búsqueda de Pokémon**:  
   Permite buscar un Pokémon por su nombre y acceder directamente a sus detalles.  
4. **Navegación Dinámica**:  
   La aplicación tiene navegación integrada con Vue Router para cambiar entre la página principal y la vista de detalles.

---

## **Instalación**

1. Clona el repositorio:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   ```
2. Navega al directorio del proyecto:
    ```bash
    cd nombre-del-proyecto\PokedexPrueba
    ```
3. Instala las dependencias:
    ```bash
    npm install vue-router 
    npm install

    ```
4. Ejecuta la aplicación:
    ```bash
    npm run dev

    ```
Ahí finalmente te debería indicar el enlace que debes seguir en tu navegador para llegar a la apliación web.

Estructura del proyecto:

```bash
src/
│-- assets/            # Recursos estáticos que no utilicé
│-- components/        
│   ├── Nav.vue        # Navegador para todas las páginas
│   └── Search.vue     # Buscador
│-- views/             
│   ├── Home.vue       # Página principal con lista de Pokémon
│   └── Detail.vue     # Detalles de un Pokémon
│-- router/            
│   └── index.js       # Manejo de rutas
│-- App.vue            # Componente raíz
│-- main.js            
└── README.md          # Documentación del proyecto
```

## **Rutas de la Aplicación**

La aplicación utiliza **Vue Router** para gestionar las siguientes rutas:

1. **Página Principal** (`/`)  
   Muestra la lista de los primeros 150 Pokémon con paginación.

2. **Página de Detalles** (`/Detail/:id`)  
   Muestra la información detallada del Pokémon seleccionado.

    - La utilización de Vue Router fue elegida porque nos permite utilizar un manejo de rutas que no tiene necesidad de refrescar la página (lo que genera pérdida de progreso en ciertos escenarios). Si bien para este proyecto no era necesario, creí que sería una buena práctica a implementar por si fuese necesario continuar el proyecto con nuevas funcionalidades.
---

## **Vistas**

### **1. App.vue**  
- Es el componente raíz que incluye la navegación y el enrutador.

### **2. Home.vue**  
- Muestra la lista paginada de Pokémon.  
- Permite cambiar de página y acceder a los detalles de un Pokémon al hacer clic.

### **3. Detail.vue**  
- Muestra información detallada de un Pokémon seleccionado, incluyendo:  
   - **Nombre**  
   - **Imágenes** (normal y shiny porque creo que ambos merecen aparecer)  
   - **Tipos**  
   - **Habilidades**  
   - **Peso y altura**

## **Componentes**
Siguiendo la estructura del framework, fui construyendo diferentes componentes para adherir a mis vistas. La idea es que no se repita código innecesariamente, sino que este exista de manera compartimentalizada para su reutilización. Así, cualquiera de los elementos que cree puede ser reutilizado en nuevas vistas que se quieran crear a futuro sin la necesidad de crear todo desde 0.

### **1. Nav.vue**  
- Barra de navegación que permite regresar a la página principal desde la vista de detalles.

### **2. Search.vue**  
- Permite buscar un Pokémon por su nombre.  
- Muestra un mensaje de error si el Pokémon no existe o si su ID es mayor a 150. Un amable mensaje como se pidió.

---

## **Estilos**

Para la realización de los syles decidí usar `scoped` pues me permitía un manejo más personalizado de cada componente o vista/página que iba decorando. En general, no le di tanto tiempo al estilo de la página, pero sí me di el lujo de agregar uno que otro estilo visual que me parece atractivo. Por supuesto, con más tiempo y mejor elección de colores pudo quedar mucho mejor.   

---
## **Script**

Para el script de cada una de las vistas y componentes usé composition API generando script con setup como fue pedido. En general, creo que el acercamiento por composition produce un código mucho más legible y fácil de entender para otros usuarios que les interese agregar funcionalidades a la aplicación, y también para uno mismo, para mantener un orden y que resulte más sencillo encontrar posibles errores, por lo que me quedaré con esta forma de crear scripts con vue.js.

---

## **Desafíos durante la creación de la app web**
1. **Vue.js**: De buenas a primeras, conocía de qué trataba a grandes rasgos el framework, pero nunca lo había utilizado. Para evitar lanzarme de cabeza contra un muro, preferí hacer una investigación, tanto de la documentación como tutoriales en internet, para entender cómo se organizaba y funcionaba más en detalle el framework. Gran parte del tiempo invertido en la realización de la aplicación fue para familiarizarme y entender con el mayor detalle posible la herramienta que se me pidió utilizar. 
2. **PokeAPI**: No sé si es exactamente un desafío, pero varias veces me equivoqué en la forma de invocar a los elementos de la API y debía volver a leer la documentación para corregirlo. Más que un desafío, fue como una "piedra en el zapato", un problema que me estuvo molestando constantemente porque era difícil de notar, pero que no era difícil de corregir.
3. **Manejo de Promesas**: En general no usé mucho este tipo de comando como _async_ o _await_ en proyectos pasados, sin embargo, fue muy importante para la obtención de los datos desde la PokeAPI, por lo que tuve que familiarizarme con la mecánica de promesas en javascript desde la primera llamada en Home.vue. Creo que aun queda por acostumbrarse, pero creo que ya se sentó una buena base con este proyecto.
4. **Composition API**: Otro de los desafíos que enfrenté fue aprender a utilizar correctamente funciones del Composition API como _onMounted_ para ejecutar lógica al cargar el componente, _ref_ para manejar variables reactivas y _computed_ para definir propiedades calculadas. En nivel de dificultad diría que fueron: _ref_ < _onMounted_ < _computed_. Pero con la práctica y lo mucho que tuve que usarlos en el proyecto, finalmente me acostumbré. Además, la documentación trae ejemplos muy útiles para entender cómo funcionan cada uno.

---
## **Extras a lo pedido**
- Como detalles extra agregué un mensaje por si el pokemon buscado no existe dentro de la PokeAPI y otro para cuando se presiona buscar, pero no se ha escrito nada.
- En el input de la búsqueda, puse un mensaje de placeholer. Además, lo que se reciba será recortado (usando trim) para quitar los espacios y también se des-mayusculizarán(?) las palabras para que no sea un problema al realizar una búsqueda.
- Instalé vou-router para realiza un manejo de rutas escalable en le tiempo, que permita una fácil implementación de nuevas funcionalidades si así se llegara a desear.

---
## **Para Mejorar**

- Mejorar la interfaz con un diseño más atractivo.   
- Hacer más componentes. Por ejemplo: la tabla de Home.vue pudo ser un compartimento
- Me hubiese gustado implementar una forma de actualizar al momento de escribir el nombre de un pokemon, los pokemones que tienen nombres similares o quizás sus evoluciones.

---
