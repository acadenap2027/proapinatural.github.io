const spanishCopy={"skip":"Ir a los productos","announcement":"Un poco de naturaleza. Un precio sencillo. Cada producto COP 20.000.","nav-shop":"La colección","nav-story":"Nuestra historia","nav-contact":"Hablemos","bag":"Bolsa","eyebrow":"DE LA COLMENA A TU DÍA A DÍA","headline":"Tu día a día,<br>más <em>natural.</em>","intro":"Miel para tus mañanas. Tesoros de la colmena para tu despensa. Cuidado personal para tus rituales. Encuentra tu momento de naturaleza en Proapinatural.","explore":"Descubre la colección","ask":"Hablemos por WhatsApp","price":"por producto · Elige tus favoritos","roundel":"UN POCO DE<br><b>dulzura natural</b>","caption":"EL RITUAL DE CADA MAÑANA","v1":"Miel y tesoros de la colmena","v2":"27 productos para descubrir","v3":"COP 20.000 por producto","v4":"Hablemos por WhatsApp","discover-eyebrow":"TU PRÓXIMO RITUAL","discover-heading":"Lo bueno empieza en lo sencillo.","discover-intro":"Una cucharada por la mañana. Un favorito en tu despensa. Un momento para ti.","d1-label":"01 / MAÑANAS MÁS DULCES","d1-title":"Hazle espacio a la miel.","d1-text":"Para tus tostadas, tu té y tus recetas favoritas.","d2-label":"02 / TESOROS DE LA COLMENA","d2-title":"Descubre algo nuevo.","d2-text":"Conoce el polen, el propóleo y otros favoritos.","d3-label":"03 / UN MOMENTO PARA TI","d3-title":"Cuida tus pequeños momentos.","d3-text":"Encuentra jabones, cremas y cuidado personal.","shop-eyebrow":"LA COLECCIÓN PROAPINATURAL","shop-title":"Encuentra tu próximo favorito.","shop-intro":"Un precio sencillo.<br>Muchas pequeñas maravillas.","all":"Todos los productos","pantry":"Miel y despensa","care":"Cuidado personal","catalog-price":"Cada producto COP 20.000","catalog-note":"Guarda tus favoritos en la bolsa y consulta su disponibilidad por WhatsApp. Todos los precios están en pesos colombianos (COP).","story-caption":"Pequeñas maravillas de la naturaleza. Tus rituales diarios.","story-eyebrow":"EL CORAZÓN DE PROAPINATURAL","story-title":"De pequeñas abejas.<br>A grandes <em>momentos.</em>","story-1":"Una flor, una abeja, una cucharada de miel. Nos encanta cómo algo tan pequeño puede acompañar esos momentos que disfrutamos cada día.","story-2":"En Proapinatural reunimos miel, productos de la colmena y cuidado personal en una sola colección. Descubre sus presentaciones, elige tus favoritos y déjanos ayudarte.","story-cta":"Explora la colección","faq-eyebrow":"ANTES DE ELEGIR","faq-title":"Todo un poco más claro.","faq-intro":"Estamos aquí para ayudarte a elegir.","q1":"¿Cuánto cuestan los productos?","a1":"Cada producto cuesta COP 20.000. La bolsa muestra el total según las cantidades que elijas. Consulta el costo de envío antes de confirmar tu pedido.","q2":"¿Cómo puedo consultar por un pedido?","a2":"Elige tus favoritos, abre la bolsa y selecciona «Consultar por mi bolsa». WhatsApp abrirá un borrador para que lo revises y envíes. Confirmaremos disponibilidad, envío y pago directamente. La página no recibe pagos.","q3":"¿Dónde encuentro ingredientes e instrucciones?","a3":"Abre los detalles del producto y consulta su empaque. Si necesitas información sobre ingredientes, tamaños o instrucciones, escríbenos antes de elegir.","q4":"¿Puedo consultar por envíos en Bogotá?","a4":"Sí. Escríbenos tu zona de entrega por WhatsApp para confirmar cobertura, costo y tiempo estimado antes de hacer tu pedido.","contact-eyebrow":"TU PRÓXIMO FAVORITO EMPIEZA AQUÍ","contact-title":"Dale a tu día<br>un toque <em>natural.</em>","contact-intro":"¿Necesitas ayuda para elegir? Consulta por un producto, un regalo o envíos en Bogotá. Nos encantará escucharte.","contact-card-title":"Una buena conversación.<br>Un poco de ayuda personal.","contact-card-text":"Cuéntanos qué te gustó. Te ayudaremos con la disponibilidad y los siguientes pasos.","contact-button":"Escríbenos por WhatsApp","footer-message":"Un poco de naturaleza.<br>Para tu día a día.","footer-shop":"Colección","footer-story":"Nuestra historia","footer-contact":"Contacto","footer-location":"Bogotá, Colombia","footer-note":"Consulta por productos vía WhatsApp","bag-title":"Tus favoritos","bag-intro":"Una pequeña colección de lo que te gusta.","inquiry":"Consultar por mi bolsa","bag-note":"Revisa y envía el borrador en WhatsApp. La disponibilidad y el envío se confirman directamente; aquí no se recibe ningún pago.","continue":"Seguir explorando"};
spanishCopy["address-label"]="Encuéntranos";
const staticTranslations=Array.from(document.querySelectorAll('[data-copy]'),element=>({element,en:element.innerHTML,es:spanishCopy[element.dataset.copy]}));
const uiText={en:{details:'View details',remove:'Remove',added:'Saved to your bag',empty:'Find your favorites in the collection and save them here.',preview:'COP prices. Ask us about availability on WhatsApp.',save:'Save to my bag',photograph:'product photograph',add:name=>`Save ${name} to bag`,increase:name=>`Increase ${name} quantity`,decrease:name=>`Decrease ${name} quantity`},es:{details:'Ver detalles',remove:'Eliminar',added:'Guardado en tu bolsa',empty:'Encuentra tus favoritos en la colección y guárdalos aquí.',preview:'Precios en COP. Consulta disponibilidad por WhatsApp.',save:'Guardar en mi bolsa',photograph:'fotografía del producto',add:name=>`Guardar ${name} en la bolsa`,increase:name=>`Aumentar cantidad de ${name}`,decrease:name=>`Disminuir cantidad de ${name}`}};
const spanishProducts = {
  "honey-100": {
    "name": "Miel Apinal · 100 g",
    "tag": "LA DESPENSA",
    "subtitle": "Para tu despensa y tus rituales diarios.",
    "description": "Miel Apinal · 100 g. Consulta los ingredientes, el tamaño y las instrucciones en el empaque del producto."
  },
  "honey-500": {
    "name": "Miel Apinal · 500 g",
    "tag": "LA DESPENSA",
    "subtitle": "Para tu despensa y tus rituales diarios.",
    "description": "Miel Apinal · 500 g. Consulta los ingredientes, el tamaño y las instrucciones en el empaque del producto."
  },
  "honey-pouch-small": {
    "name": "Miel Apinal · Bolsa dosificadora",
    "tag": "LA DESPENSA",
    "subtitle": "Para tu despensa y tus rituales diarios.",
    "description": "Miel Apinal · Bolsa dosificadora. Consulta los ingredientes, el tamaño y las instrucciones en el empaque del producto."
  },
  "honey-family": {
    "name": "Miel Apinal · Botella familiar",
    "tag": "LA DESPENSA",
    "subtitle": "Para tu despensa y tus rituales diarios.",
    "description": "Miel Apinal · Botella familiar. Consulta los ingredientes, el tamaño y las instrucciones en el empaque del producto."
  },
  "honey-jar-small": {
    "name": "Miel Apinal · Frasco pequeño",
    "tag": "LA DESPENSA",
    "subtitle": "Para tu despensa y tus rituales diarios.",
    "description": "Miel Apinal · Frasco pequeño. Consulta los ingredientes, el tamaño y las instrucciones en el empaque del producto."
  },
  "honey-jar-medium": {
    "name": "Miel Apinal · Frasco mediano",
    "tag": "LA DESPENSA",
    "subtitle": "Para tu despensa y tus rituales diarios.",
    "description": "Miel Apinal · Frasco mediano. Consulta los ingredientes, el tamaño y las instrucciones en el empaque del producto."
  },
  "honey-jar-large": {
    "name": "Miel Apinal · Frasco grande",
    "tag": "LA DESPENSA",
    "subtitle": "Para tu despensa y tus rituales diarios.",
    "description": "Miel Apinal · Frasco grande. Consulta los ingredientes, el tamaño y las instrucciones en el empaque del producto."
  },
  "honey-pouch-700": {
    "name": "Miel Apinal · Bolsa de 700 g",
    "tag": "LA DESPENSA",
    "subtitle": "Para tu despensa y tus rituales diarios.",
    "description": "Miel Apinal · Bolsa de 700 g. Consulta los ingredientes, el tamaño y las instrucciones en el empaque del producto."
  },
  "propolis": {
    "name": "Extracto de propóleo Apinal",
    "tag": "CUIDADO DIARIO",
    "subtitle": "Descubre nuestra colección de cuidado personal.",
    "description": "Extracto de propóleo Apinal. Consulta los ingredientes, el tamaño y las instrucciones en el empaque del producto."
  },
  "pollen-large": {
    "name": "Polen natural Apinal · Bolsa grande",
    "tag": "LA DESPENSA",
    "subtitle": "Para tu despensa y tus rituales diarios.",
    "description": "Polen natural Apinal · Bolsa grande. Consulta los ingredientes, el tamaño y las instrucciones en el empaque del producto."
  },
  "pollen-small": {
    "name": "Polen natural Apinal · Bolsa pequeña",
    "tag": "LA DESPENSA",
    "subtitle": "Para tu despensa y tus rituales diarios.",
    "description": "Polen natural Apinal · Bolsa pequeña. Consulta los ingredientes, el tamaño y las instrucciones en el empaque del producto."
  },
  "colirio": {
    "name": "Colirio Apinal",
    "tag": "CUIDADO DIARIO",
    "subtitle": "Descubre nuestra colección de cuidado personal.",
    "description": "Colirio Apinal. Consulta los ingredientes, el tamaño y las instrucciones en el empaque del producto."
  },
  "floramiel-deodorant": {
    "name": "Desodorante Floramiel",
    "tag": "CUIDADO DIARIO",
    "subtitle": "Descubre nuestra colección de cuidado personal.",
    "description": "Desodorante Floramiel. Consulta los ingredientes, el tamaño y las instrucciones en el empaque del producto."
  },
  "floramiel-soap": {
    "name": "Jabón de miel Floramiel",
    "tag": "CUIDADO DIARIO",
    "subtitle": "Descubre nuestra colección de cuidado personal.",
    "description": "Jabón de miel Floramiel. Consulta los ingredientes, el tamaño y las instrucciones en el empaque del producto."
  },
  "vinamax": {
    "name": "Vinamax",
    "tag": "LA DESPENSA",
    "subtitle": "Para tu despensa y tus rituales diarios.",
    "description": "Vinamax. Consulta los ingredientes, el tamaño y las instrucciones en el empaque del producto."
  },
  "apinotox": {
    "name": "Apinotox",
    "tag": "CUIDADO DIARIO",
    "subtitle": "Descubre nuestra colección de cuidado personal.",
    "description": "Apinotox. Consulta los ingredientes, el tamaño y las instrucciones en el empaque del producto."
  },
  "floramiel-cream": {
    "name": "Crema de manos Floramiel",
    "tag": "CUIDADO DIARIO",
    "subtitle": "Descubre nuestra colección de cuidado personal.",
    "description": "Crema de manos Floramiel. Consulta los ingredientes, el tamaño y las instrucciones en el empaque del producto."
  },
  "energ-abeja": {
    "name": "Energ’Abeja",
    "tag": "LA DESPENSA",
    "subtitle": "Para tu despensa y tus rituales diarios.",
    "description": "Energ’Abeja. Consulta los ingredientes, el tamaño y las instrucciones en el empaque del producto."
  },
  "floramiel-lotion": {
    "name": "Loción corporal Floramiel",
    "tag": "CUIDADO DIARIO",
    "subtitle": "Descubre nuestra colección de cuidado personal.",
    "description": "Loción corporal Floramiel. Consulta los ingredientes, el tamaño y las instrucciones en el empaque del producto."
  },
  "royal-jelly": {
    "name": "Jalea real",
    "tag": "LA DESPENSA",
    "subtitle": "Para tu despensa y tus rituales diarios.",
    "description": "Jalea real. Consulta los ingredientes, el tamaño y las instrucciones en el empaque del producto."
  },
  "floramiel-shampoo": {
    "name": "Champú Floramiel",
    "tag": "CUIDADO DIARIO",
    "subtitle": "Descubre nuestra colección de cuidado personal.",
    "description": "Champú Floramiel. Consulta los ingredientes, el tamaño y las instrucciones en el empaque del producto."
  },
  "beetoxin": {
    "name": "Crema corporal Beetoxin",
    "tag": "CUIDADO DIARIO",
    "subtitle": "Descubre nuestra colección de cuidado personal.",
    "description": "Crema corporal Beetoxin. Consulta los ingredientes, el tamaño y las instrucciones en el empaque del producto."
  },
  "espinal-honey-glass": {
    "name": "Miel El Espinal · Botella de vidrio",
    "tag": "LA DESPENSA",
    "subtitle": "Para tu despensa y tus rituales diarios.",
    "description": "Miel El Espinal · Botella de vidrio. Consulta los ingredientes, el tamaño y las instrucciones en el empaque del producto."
  },
  "apple-vinegar": {
    "name": "Vinagre de manzana El Espinal",
    "tag": "LA DESPENSA",
    "subtitle": "Para tu despensa y tus rituales diarios.",
    "description": "Vinagre de manzana El Espinal. Consulta los ingredientes, el tamaño y las instrucciones en el empaque del producto."
  },
  "espinal-propolis": {
    "name": "Propóleo El Espinal",
    "tag": "LA DESPENSA",
    "subtitle": "Para tu despensa y tus rituales diarios.",
    "description": "Propóleo El Espinal. Consulta los ingredientes, el tamaño y las instrucciones en el empaque del producto."
  },
  "espinal-honey": {
    "name": "Miel El Espinal · Botella",
    "tag": "LA DESPENSA",
    "subtitle": "Para tu despensa y tus rituales diarios.",
    "description": "Miel El Espinal · Botella. Consulta los ingredientes, el tamaño y las instrucciones en el empaque del producto."
  },
  "honey-propolis": {
    "name": "Miel con propóleo Apinal",
    "tag": "LA DESPENSA",
    "subtitle": "Para tu despensa y tus rituales diarios.",
    "description": "Miel con propóleo Apinal. Consulta los ingredientes, el tamaño y las instrucciones en el empaque del producto."
  }
};
let language='es';try{const saved=localStorage.getItem('propinatural-language');if(['en','es'].includes(saved))language=saved;}catch{}
function localizedProduct(product){return language==='es'?{...product,...spanishProducts[product.id]}:product;}
function setLanguage(next){if(!['en','es'].includes(next))return;language=next;document.documentElement.lang=language;document.title=language==='es'?'Proapinatural | Miel, propóleo y cuidado natural en Bogotá':'Proapinatural | Honey, hive essentials & personal care in Bogotá';staticTranslations.forEach(item=>item.element.innerHTML=item[language]);document.querySelectorAll('[data-language]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.language===language)));document.querySelector('#open-bag').setAttribute('aria-label',language==='es'?'Abrir la bolsa':'Open shopping bag');document.querySelector('#product-dialog .close').setAttribute('aria-label',language==='es'?'Cerrar detalles del producto':'Close product details');document.querySelector('#bag-dialog .close').setAttribute('aria-label',language==='es'?'Cerrar la bolsa':'Close shopping bag');try{localStorage.setItem('propinatural-language',language);}catch{}document.dispatchEvent(new Event('languagechange'));}
document.querySelectorAll('[data-language]').forEach(button=>button.addEventListener('click',()=>setLanguage(button.dataset.language)));setLanguage(language);
