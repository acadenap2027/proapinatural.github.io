// English is the source language; capture it before applying a saved preference.
const spanishCopy = [
  ['.skip', 'Ir a los productos'],
  ['.announcement', 'Un poco más cerca de la naturaleza. Un poco de bienestar, cada día.'],
  ['header nav a[href="#shop"]', 'La colección'],
  ['header nav a[href="#philosophy"]', 'Nuestra filosofía'],
  ['header nav a[href="#contact"]', 'Contacto'],
  ['#bag-label', 'Bolsa'],
  ['.hero-copy .eyebrow', '<span></span> LA NATURALEZA EN SU FORMA MÁS DULCE'],
  ['h1', 'Pequeñas maravillas.<br>De la colmena.<br><em>Para tu día a día.</em>'],
  ['.intro', 'Descubre tus nuevos rituales diarios. Conoce nuestra miel, propóleo y productos de cera de abeja, inspirados en el extraordinario mundo de las abejas.'],
  ['.hero-copy .button', 'Explora la colección <span aria-hidden="true">↗</span>'],
  ['.hero-foot > span:last-child', 'Con raíces en la naturaleza.<br>Para los momentos sencillos.'],
  ['.photo-caption span:first-child', 'EL MUNDO DE PROPINATURAL<br>TODO EMPIEZA CON EL PROPÓLEO.'],
  ['.photo-caption span:last-child', '01 / LA COLECCIÓN DE LA COLMENA'],
  ['.roundel', 'DE LA COLMENA<br><b>con amor</b><span>A TU HOGAR</span>'],
  ['.values-strip span:nth-child(1)', 'MIEL Y TESOROS DE LA COLMENA'],
  ['.values-strip span:nth-child(3)', 'RITUALES DIARIOS CON INTENCIÓN'],
  ['.values-strip span:nth-child(5)', 'INSPIRADOS EN LA NATURALEZA'],
  ['.values-strip span:nth-child(7)', 'UN POCO DE BIENESTAR CADA DÍA'],
  ['.shop .eyebrow', 'LA COLECCIÓN DE LA COLMENA'],
  ['.shop h2', 'La naturaleza tiene buen gusto.'],
  ['.section-heading > p', 'Para tu despensa, tu bolsillo<br>y tus momentos de calma.'],
  ['[data-filter="all"]', 'Todos los productos'],
  ['[data-filter="pantry"]', 'La despensa'],
  ['[data-filter="care"]', 'Cuidado diario'],
  ['[data-filter="home"]', 'El hogar'],
  ['.preview-label', 'Avance de la colección · Precios próximamente'],
  ['.catalog-note', 'Un primer vistazo a Propinatural. Las imágenes son ilustrativas; los ingredientes, tamaños y disponibilidad definitivos se confirmarán antes del lanzamiento.'],
  ['.story-caption', 'Rituales sencillos. Pequeñas creadoras extraordinarias.'],
  ['.story-copy .eyebrow', 'EL CORAZÓN DE PROPINATURAL'],
  ['.story-copy h2', 'Una pequeña colmena.<br>Un mundo de <em>posibilidades.</em>'],
  ['.story-copy > p:nth-of-type(2)', 'Hay algo maravilloso en el trabajo diario de las abejas. Una flor se convierte en néctar. El néctar se convierte en miel. Y un poco de esa maravilla llega a nuestras vidas.'],
  ['.story-copy > p:nth-of-type(3)', 'Propinatural es una tienda naturista inspirada en esta conexión: productos de la colmena para mañanas tranquilas, rituales de cuidado y un hogar más natural.'],
  ['.story-copy .text-link', 'Encuentra tu esencial de cada día <span aria-hidden="true">↗</span>'],
  ['.faq .eyebrow', 'CONOCE LA COLMENA'],
  ['.faq h2', '¿Curiosidad por naturaleza?'],
  ['.faq > div > p:last-child', 'Conoce la colección.'],
  ['.questions details:nth-child(1) summary', '¿Qué encontraré en Propinatural?'],
  ['.questions details:nth-child(1) p', 'Nuestra colección preliminar incluye miel, propóleo, bálsamo de cera de abeja y velas de cera de abeja. Compartiremos la gama definitiva y la información de los productos cuando abramos la tienda.'],
  ['.questions details:nth-child(2) summary', '¿Ya puedo hacer un pedido?'],
  ['.questions details:nth-child(2) p', 'Todavía no. Puedes explorar los productos y guardar tus favoritos en la bolsa de este dispositivo. Los pagos y pedidos estarán disponibles cuando estén listos los detalles de los productos y los envíos.'],
  ['.questions details:nth-child(3) summary', '¿Dónde encuentro los ingredientes y detalles de los productos?'],
  ['.questions details:nth-child(3) p', 'Selecciona «Ver detalles» en un producto para conocerlo. Las listas de ingredientes verificadas, las instrucciones de uso y los tamaños estarán disponibles antes de que se puedan comprar los productos.'],
  ['.questions details:nth-child(4) summary', '¿Cómo puedo contactar con Propinatural?'],
  ['.questions details:nth-child(4) p', 'Anunciaremos aquí nuestros canales oficiales de contacto antes del lanzamiento. Consulta la sección de contacto para conocer las novedades.'],
  ['.contact .eyebrow', 'HABLEMOS CON NATURALIDAD'],
  ['.contact h2', 'Las cosas buenas empiezan<br>con un <em>hola.</em>'],
  ['.contact > div:first-child > p:last-child', 'Preguntas sobre productos, regalos especiales o un amor compartido por las abejas.<br>Nos encantará saber de ti.'],
  ['.contact-card h3', 'Nuestra colmena está tomando forma.'],
  ['.contact-card p', 'Pronto compartiremos el correo electrónico, el teléfono y los datos oficiales de la tienda. Los encontrarás aquí antes de que abramos los pedidos.'],
  ['.opening', 'CANALES DE CONTACTO PRÓXIMAMENTE'],
  ['.footer-top > p', 'Un poco de bienestar.<br>De la naturaleza, con amor.'],
  ['.footer-top nav a[href="#shop"]', 'Colección'],
  ['.footer-top nav a[href="#philosophy"]', 'Filosofía'],
  ['.footer-top nav a[href="#contact"]', 'Contacto'],
  ['.footer-bottom > span:nth-child(2)', 'Inspirados en las abejas. Naturalmente.'],
  ['.footer-bottom > span:nth-child(3)', 'Avance de la tienda · Pedidos aún no disponibles'],
  ['.dialog-heading h2', 'Tu bolsa'],
  ['#bag-dialog > .bag-note:first-of-type', 'Guarda tus favoritos mientras nuestra tienda toma forma.'],
  ['#bag-dialog > .bag-note:last-of-type', 'Los pedidos abrirán pronto. No se realiza ningún pago ni se envía ningún pedido.'],
  ['#continue-shopping', 'Sigue explorando <span>↗</span>']
];
const spanishAttributes = [
  ['header .brand', 'aria-label', 'Inicio de Propinatural'],
  ['header nav', 'aria-label', 'Navegación principal'],
  ['#open-bag', 'aria-label', 'Abrir la bolsa'],
  ['.filters', 'aria-label', 'Filtrar productos'],
  ['.footer-top nav', 'aria-label', 'Navegación del pie de página'],
  ['#product-dialog .close', 'aria-label', 'Cerrar detalles del producto'],
  ['#bag-dialog .close', 'aria-label', 'Cerrar la bolsa'],
  ['.hero-photo > img', 'alt', 'Miel, propóleo, bálsamo y vela de cera de abeja con flores silvestres'],
  ['.story-visual img', 'alt', 'Miel dorada y productos de la colmena bajo la luz natural'],
  ['meta[name="description"]', 'content', 'Explora el mundo de Propinatural: miel, propóleo y productos de cera de abeja inspirados en la naturaleza.']
];
const staticTranslations = spanishCopy.map(([selector, es]) => {
  const element = document.querySelector(selector);
  return { element, en: element.innerHTML, es };
});
const attributeTranslations = spanishAttributes.map(([selector, attribute, es]) => {
  const element = document.querySelector(selector);
  return { element, attribute, en: element.getAttribute(attribute), es };
});
const uiText = {
  en: { details:'View details', remove:'Remove', added:'Added to your preview bag', empty:'Your bag is waiting for a little goodness. Explore the collection to save your favorites.', preview:'Collection preview · Price and availability coming soon.', save:'Save to your bag', photograph:'concept product photograph', add:name=>`Add ${name} to bag`, increase:name=>`Increase ${name} quantity`, decrease:name=>`Decrease ${name} quantity` },
  es: { details:'Ver detalles', remove:'Eliminar', added:'Añadido a tu bolsa de favoritos', empty:'Tu bolsa espera un poco de bienestar. Explora la colección y guarda tus favoritos.', preview:'Avance de la colección · Precio y disponibilidad próximamente.', save:'Guardar en tu bolsa', photograph:'fotografía conceptual del producto', add:name=>`Añadir ${name} a la bolsa`, increase:name=>`Aumentar cantidad de ${name}`, decrease:name=>`Disminuir cantidad de ${name}` }
};
const spanishProducts = {
  honey: {name:'Miel dorada',tag:'UN ESENCIAL DE LA DESPENSA',subtitle:'Un toque de dulzura para mañanas tranquilas.',description:'Un esencial inspirado en la miel para tus tostadas, tus recetas favoritas y el té de la tarde. La variedad, el origen y el tamaño del frasco definitivos se anunciarán antes del lanzamiento.'},
  propolis: {name:'Gotas de propóleo',tag:'DE LA COLMENA',subtitle:'Descubre el extraordinario mundo del propóleo.',description:'Conoce el propóleo, un ingrediente producido por las abejas que inspira el concepto de Propinatural. La formulación, los ingredientes y las instrucciones de uso se compartirán antes de poner este producto a la venta.'},
  balm: {name:'Bálsamo de cera de abeja',tag:'UN RITUAL DIARIO',subtitle:'Un pequeño momento de cuidado para llevar contigo.',description:'Un concepto de bálsamo inspirado en la cera de abeja para tu rutina de cuidado diario. La lista de ingredientes, las opciones de fragancia, el tamaño y las instrucciones se confirmarán antes del lanzamiento.'},
  candle: {name:'Vela de cera de abeja',tag:'MOMENTOS DE CALMA',subtitle:'Dale un poco de calidez a tu espacio.',description:'Un concepto de vela de cera de abeja enrollada para tardes tranquilas y regalos especiales. Las dimensiones, el tiempo de combustión y las instrucciones completas de cuidado se confirmarán antes del lanzamiento.'}
};
let language = 'en';
try { if (localStorage.getItem('propinatural-language') === 'es') language = 'es'; } catch {}
function localizedProduct(product) { return language === 'es' ? {...product, ...spanishProducts[product.id]} : product; }
function setLanguage(next) {
  if (!['en', 'es'].includes(next)) return;
  language = next;
  document.documentElement.lang = language;
  document.title = language === 'es' ? 'Propinatural — Bienestar de la colmena' : 'Propinatural — Goodness from the hive';
  staticTranslations.forEach(item => { item.element.innerHTML = item[language]; });
  attributeTranslations.forEach(item => item.element.setAttribute(item.attribute, item[language]));
  document.querySelectorAll('[data-language]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.language === language)));
  try { localStorage.setItem('propinatural-language', language); } catch {}
  document.dispatchEvent(new Event('languagechange'));
}
document.querySelectorAll('[data-language]').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.language)));
setLanguage(language);
