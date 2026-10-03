const spanishCopy={"skip":"Ir a los productos","announcement":"Miel, productos de la colmena y cuidado natural. Descubre nuestras presentaciones.","nav-shop":"La colección","nav-story":"Nuestra historia","nav-contact":"Hablemos","bag":"Bolsa","eyebrow":"DE LA COLMENA A TU DÍA A DÍA","headline":"Tu día a día,<br>más <em>natural.</em>","intro":"Miel para tus mañanas. Tesoros de la colmena para tu despensa. Cuidado personal para tus rituales. Encuentra tu momento de naturaleza en Proapinatural.","explore":"Descubre la colección","ask":"Hablemos por WhatsApp","price":"desde · Elige tus favoritos","roundel":"UN POCO DE<br><b>dulzura natural</b>","caption":"EL RITUAL DE CADA MAÑANA","v1":"Miel y tesoros de la colmena","v2":"33 productos para descubrir","v3":"Presentaciones para cada momento","v4":"Hablemos por WhatsApp","discover-eyebrow":"TU PRÓXIMO RITUAL","discover-heading":"Lo bueno empieza en lo sencillo.","discover-intro":"Una cucharada por la mañana. Un favorito en tu despensa. Un momento para ti.","d1-label":"01 / MAÑANAS MÁS DULCES","d1-title":"Hazle espacio a la miel.","d1-text":"Para tus tostadas, tu té y tus recetas favoritas.","d2-label":"02 / TESOROS DE LA COLMENA","d2-title":"Descubre algo nuevo.","d2-text":"Conoce el polen, el propóleo y otros favoritos.","d3-label":"03 / UN MOMENTO PARA TI","d3-title":"Cuida tus pequeños momentos.","d3-text":"Encuentra jabones, cremas y cuidado personal.","shop-eyebrow":"LA COLECCIÓN PROAPINATURAL","shop-title":"Encuentra tu próximo favorito.","shop-intro":"Encuentra tu presentación ideal.<br>Muchas pequeñas maravillas.","all":"Todos los productos","pantry":"Miel y despensa","care":"Cuidado personal","catalog-price":"Precios en pesos colombianos (COP)","catalog-note":"Guarda tus favoritos en la bolsa y consulta su disponibilidad por WhatsApp. Todos los precios están en pesos colombianos (COP).","story-caption":"Pequeñas maravillas de la naturaleza. Tus rituales diarios.","story-eyebrow":"EL CORAZÓN DE PROAPINATURAL","story-title":"De pequeñas abejas.<br>A grandes <em>momentos.</em>","story-1":"Una flor, una abeja, una cucharada de miel. Nos encanta cómo algo tan pequeño puede acompañar esos momentos que disfrutamos cada día.","story-2":"En Proapinatural reunimos miel, productos de la colmena y cuidado personal en una sola colección. Descubre sus presentaciones, elige tus favoritos y déjanos ayudarte.","story-cta":"Explora la colección","faq-eyebrow":"ANTES DE ELEGIR","faq-title":"Todo un poco más claro.","faq-intro":"Estamos aquí para ayudarte a elegir.","q1":"¿Cuánto cuestan los productos?","a1":"Cada producto muestra su precio en pesos colombianos (COP) y su presentación, cuando está disponible. La bolsa calcula el total según las cantidades que elijas. Consulta el costo de envío antes de confirmar tu pedido.","q2":"¿Cómo puedo consultar por un pedido?","a2":"Elige tus favoritos, abre la bolsa y selecciona «Consultar por mi bolsa». WhatsApp abrirá un borrador para que lo revises y envíes. Confirmaremos disponibilidad, envío y pago directamente. La página no recibe pagos.","q3":"¿Dónde encuentro ingredientes e instrucciones?","a3":"Abre los detalles del producto y consulta su empaque. Si necesitas información sobre ingredientes, tamaños o instrucciones, escríbenos antes de elegir.","q4":"¿Puedo consultar por envíos en Bogotá?","a4":"Sí. Escríbenos tu zona de entrega por WhatsApp para confirmar cobertura, costo y tiempo estimado antes de hacer tu pedido.","contact-eyebrow":"TU PRÓXIMO FAVORITO EMPIEZA AQUÍ","contact-title":"Dale a tu día<br>un toque <em>natural.</em>","contact-intro":"¿Necesitas ayuda para elegir? Consulta por un producto, un regalo o envíos en Bogotá. Nos encantará escucharte.","contact-card-title":"Una buena conversación.<br>Un poco de ayuda personal.","contact-card-text":"Cuéntanos qué te gustó. Te ayudaremos con la disponibilidad y los siguientes pasos.","contact-button":"Escríbenos por WhatsApp","footer-message":"Un poco de naturaleza.<br>Para tu día a día.","footer-shop":"Colección","footer-story":"Nuestra historia","footer-contact":"Contacto","footer-location":"Bogotá, Colombia","footer-note":"Consulta por productos vía WhatsApp","bag-title":"Tus favoritos","bag-intro":"Una pequeña colección de lo que te gusta.","inquiry":"Consultar por mi bolsa","bag-note":"Revisa y envía el borrador en WhatsApp. La disponibilidad y el envío se confirman directamente; aquí no se recibe ningún pago.","continue":"Seguir explorando","home":"Regalos y hogar"};
spanishCopy["address-label"]="Encuéntranos";
const staticTranslations=Array.from(document.querySelectorAll('[data-copy]'),element=>({element,en:element.innerHTML,es:spanishCopy[element.dataset.copy]}));
const uiText={en:{details:'View details',remove:'Remove',added:'Saved to your bag',empty:'Find your favorites in the collection and save them here.',preview:'COP prices. Ask us about availability on WhatsApp.',save:'Save to my bag',photograph:'product photograph',add:name=>`Save ${name} to bag`,increase:name=>`Increase ${name} quantity`,decrease:name=>`Decrease ${name} quantity`},es:{details:'Ver detalles',remove:'Eliminar',added:'Guardado en tu bolsa',empty:'Encuentra tus favoritos en la colección y guárdalos aquí.',preview:'Precios en COP. Consulta disponibilidad por WhatsApp.',save:'Guardar en mi bolsa',photograph:'fotografía del producto',add:name=>`Guardar ${name} en la bolsa`,increase:name=>`Aumentar cantidad de ${name}`,decrease:name=>`Disminuir cantidad de ${name}`}};
const spanishProducts = {
  "honey-100": {
    "name": "Botella de miel · 1.000 g",
    "tag": "LA DESPENSA",
    "subtitle": "Para tu despensa y tus rituales diarios.",
    "description": "Botella de miel · 1.000 g. Consulta los ingredientes y las instrucciones en el empaque del producto."
  },
  "honey-500": {
    "name": "Media de miel · 500 g",
    "tag": "LA DESPENSA",
    "subtitle": "Para tu despensa y tus rituales diarios.",
    "description": "Media de miel · 500 g. Consulta los ingredientes y las instrucciones en el empaque del producto."
  },
  "honey-pouch-small": {
    "name": "Miel doy pack · 150 g",
    "tag": "LA DESPENSA",
    "subtitle": "Para tu despensa y tus rituales diarios.",
    "description": "Miel doy pack · 150 g. Consulta los ingredientes y las instrucciones en el empaque del producto."
  },
  "honey-family": {
    "name": "Garrafa de miel · 2,8 kg",
    "tag": "LA DESPENSA",
    "subtitle": "Para tu despensa y tus rituales diarios.",
    "description": "Garrafa de miel · 2,8 kg. Consulta los ingredientes y las instrucciones en el empaque del producto."
  },
  "honey-jar-small": {
    "name": "Miel en frasco · 300 g",
    "tag": "LA DESPENSA",
    "subtitle": "Para tu despensa y tus rituales diarios.",
    "description": "Miel en frasco · 300 g. Consulta los ingredientes y las instrucciones en el empaque del producto."
  },
  "honey-jar-medium": {
    "name": "Miel en frasco · 625 g",
    "tag": "LA DESPENSA",
    "subtitle": "Para tu despensa y tus rituales diarios.",
    "description": "Miel en frasco · 625 g. Consulta los ingredientes y las instrucciones en el empaque del producto."
  },
  "honey-jar-large": {
    "name": "Miel en frasco · 1.350 g",
    "tag": "LA DESPENSA",
    "subtitle": "Para tu despensa y tus rituales diarios.",
    "description": "Miel en frasco · 1.350 g. Consulta los ingredientes y las instrucciones en el empaque del producto."
  },
  "honey-pouch-700": {
    "name": "Miel doy pack · 700 g",
    "tag": "LA DESPENSA",
    "subtitle": "Para tu despensa y tus rituales diarios.",
    "description": "Miel doy pack · 700 g. Consulta los ingredientes y las instrucciones en el empaque del producto."
  },
  "propolis": {
    "name": "Extracto de propóleo · 30 cc",
    "tag": "CUIDADO DIARIO",
    "subtitle": "Descubre nuestra colección de cuidado personal.",
    "description": "Extracto de propóleo · 30 cc. Consulta los ingredientes y las instrucciones en el empaque del producto."
  },
  "pollen-large": {
    "name": "Polen natural · 1.000 g",
    "tag": "LA DESPENSA",
    "subtitle": "Para tu despensa y tus rituales diarios.",
    "description": "Polen natural · 1.000 g. Consulta los ingredientes y las instrucciones en el empaque del producto."
  },
  "pollen-small": {
    "name": "Polen natural · 125 g",
    "tag": "LA DESPENSA",
    "subtitle": "Para tu despensa y tus rituales diarios.",
    "description": "Polen natural · 125 g. Consulta los ingredientes y las instrucciones en el empaque del producto."
  },
  "pollen-medium": {
    "name": "Polen natural · 250 g",
    "tag": "LA DESPENSA",
    "subtitle": "Para tu despensa y tus rituales diarios.",
    "description": "Polen natural · 250 g. Consulta los ingredientes y las instrucciones en el empaque del producto."
  },
  "colirio": {
    "name": "Colirio de miel",
    "tag": "CUIDADO DIARIO",
    "subtitle": "Descubre nuestra colección de cuidado personal.",
    "description": "Colirio de miel. Consulta los ingredientes y las instrucciones en el empaque del producto."
  },
  "floramiel-deodorant": {
    "name": "Crema facial de jalea real · 70 g",
    "tag": "CUIDADO DIARIO",
    "subtitle": "Descubre nuestra colección de cuidado personal.",
    "description": "Crema facial de jalea real · 70 g. Consulta los ingredientes y las instrucciones en el empaque del producto."
  },
  "floramiel-soap": {
    "name": "Jabón de miel · 90 g",
    "tag": "CUIDADO DIARIO",
    "subtitle": "Descubre nuestra colección de cuidado personal.",
    "description": "Jabón de miel · 90 g. Consulta los ingredientes y las instrucciones en el empaque del producto."
  },
  "vinamax": {
    "name": "Vinagre de manzana · 500 ml",
    "tag": "LA DESPENSA",
    "subtitle": "Para tu despensa y tus rituales diarios.",
    "description": "Vinagre de manzana · 500 ml. Consulta los ingredientes y las instrucciones en el empaque del producto."
  },
  "apinotox": {
    "name": "Apinotox · 240 ml",
    "tag": "CUIDADO DIARIO",
    "subtitle": "Descubre nuestra colección de cuidado personal.",
    "description": "Apinotox · 240 ml. Consulta los ingredientes y las instrucciones en el empaque del producto."
  },
  "floramiel-cream": {
    "name": "Crema facial de propóleo · 70 g",
    "tag": "CUIDADO DIARIO",
    "subtitle": "Descubre nuestra colección de cuidado personal.",
    "description": "Crema facial de propóleo · 70 g. Consulta los ingredientes y las instrucciones en el empaque del producto."
  },
  "energ-abeja": {
    "name": "Embrioabeja · 10 unidades",
    "tag": "LA DESPENSA",
    "subtitle": "Para tu despensa y tus rituales diarios.",
    "description": "Embrioabeja · 10 unidades. Consulta los ingredientes y las instrucciones en el empaque del producto."
  },
  "floramiel-lotion": {
    "name": "Crema para manos · 120 g",
    "tag": "CUIDADO DIARIO",
    "subtitle": "Descubre nuestra colección de cuidado personal.",
    "description": "Crema para manos · 120 g. Consulta los ingredientes y las instrucciones en el empaque del producto."
  },
  "royal-jelly": {
    "name": "Jalea real · 20 g",
    "tag": "LA DESPENSA",
    "subtitle": "Para tu despensa y tus rituales diarios.",
    "description": "Jalea real · 20 g. Consulta los ingredientes y las instrucciones en el empaque del producto."
  },
  "floramiel-shampoo": {
    "name": "Shampoo de miel · 250 ml",
    "tag": "CUIDADO DIARIO",
    "subtitle": "Descubre nuestra colección de cuidado personal.",
    "description": "Shampoo de miel · 250 ml. Consulta los ingredientes y las instrucciones en el empaque del producto."
  },
  "beetoxin": {
    "name": "Gel con apitoxina · 60 g",
    "tag": "CUIDADO DIARIO",
    "subtitle": "Descubre nuestra colección de cuidado personal.",
    "description": "Gel con apitoxina · 60 g. Consulta los ingredientes y las instrucciones en el empaque del producto."
  },
  "espinal-honey-glass": {
    "name": "Botella de miel · 1.050 g",
    "tag": "LA DESPENSA",
    "subtitle": "Para tu despensa y tus rituales diarios.",
    "description": "Botella de miel · 1.050 g. Consulta los ingredientes y las instrucciones en el empaque del producto."
  },
  "apple-vinegar": {
    "name": "Vinagre de sidra de manzana con madre · 490 ml",
    "tag": "LA DESPENSA",
    "subtitle": "Para tu despensa y tus rituales diarios.",
    "description": "Vinagre de sidra de manzana con madre · 490 ml. Consulta los ingredientes y las instrucciones en el empaque del producto."
  },
  "espinal-propolis": {
    "name": "Propóleo compuesto · 320 g",
    "tag": "LA DESPENSA",
    "subtitle": "Para tu despensa y tus rituales diarios.",
    "description": "Propóleo compuesto · 320 g. Consulta los ingredientes y las instrucciones en el empaque del producto."
  },
  "espinal-honey": {
    "name": "Miel · 355 g",
    "tag": "LA DESPENSA",
    "subtitle": "Para tu despensa y tus rituales diarios.",
    "description": "Miel · 355 g. Consulta los ingredientes y las instrucciones en el empaque del producto."
  },
  "honey-propolis": {
    "name": "Propóleo · 300 g",
    "tag": "LA DESPENSA",
    "subtitle": "Para tu despensa y tus rituales diarios.",
    "description": "Propóleo · 300 g. Consulta los ingredientes y las instrucciones en el empaque del producto."
  },
  "decorative-honey-small": {
    "name": "Miel decorativa · 30 g",
    "tag": "REGALOS Y HOGAR",
    "subtitle": "Un detalle de miel para regalar.",
    "description": "Miel decorativa · 30 g. Consulta los ingredientes y las instrucciones en el empaque del producto."
  },
  "decorative-honey-large": {
    "name": "Miel decorada · 130 g",
    "tag": "REGALOS Y HOGAR",
    "subtitle": "Un detalle de miel para regalar.",
    "description": "Miel decorada · 130 g. Consulta los ingredientes y las instrucciones en el empaque del producto."
  },
  "decorative-candles": {
    "name": "Vela decorativa · Pequeña",
    "tag": "REGALOS Y HOGAR",
    "subtitle": "Tres tamaños para elegir. Precio por unidad.",
    "description": "Vela decorativa · Pequeña. Disponible en tamaños pequeña (COP 7.000), mediana (COP 12.000) y grande (COP 22.000). El precio corresponde a una vela del tamaño seleccionado."
  },
  "decorative-candles-medium": {
    "name": "Vela decorativa · Mediana",
    "tag": "REGALOS Y HOGAR",
    "subtitle": "Tres tamaños para elegir. Precio por unidad.",
    "description": "Vela decorativa · Mediana. Disponible en tamaños pequeña (COP 7.000), mediana (COP 12.000) y grande (COP 22.000). El precio corresponde a una vela del tamaño seleccionado."
  },
  "decorative-candles-large": {
    "name": "Vela decorativa · Grande",
    "tag": "REGALOS Y HOGAR",
    "subtitle": "Tres tamaños para elegir. Precio por unidad.",
    "description": "Vela decorativa · Grande. Disponible en tamaños pequeña (COP 7.000), mediana (COP 12.000) y grande (COP 22.000). El precio corresponde a una vela del tamaño seleccionado."
  }
};
let language='es';try{const saved=localStorage.getItem('propinatural-language');if(['en','es'].includes(saved))language=saved;}catch{}
function localizedProduct(product){return language==='es'?{...product,...spanishProducts[product.id]}:product;}
function setLanguage(next){if(!['en','es'].includes(next))return;language=next;document.documentElement.lang=language;document.title=language==='es'?'Proapinatural | Miel, propóleo y cuidado natural en Bogotá':'Proapinatural | Honey, hive essentials & personal care in Bogotá';staticTranslations.forEach(item=>item.element.innerHTML=item[language]);document.querySelectorAll('[data-language]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.language===language)));document.querySelector('#open-bag').setAttribute('aria-label',language==='es'?'Abrir la bolsa':'Open shopping bag');document.querySelector('#product-dialog .close').setAttribute('aria-label',language==='es'?'Cerrar detalles del producto':'Close product details');document.querySelector('#bag-dialog .close').setAttribute('aria-label',language==='es'?'Cerrar la bolsa':'Close shopping bag');try{localStorage.setItem('propinatural-language',language);}catch{}document.dispatchEvent(new Event('languagechange'));}
document.querySelectorAll('[data-language]').forEach(button=>button.addEventListener('click',()=>setLanguage(button.dataset.language)));setLanguage(language);
