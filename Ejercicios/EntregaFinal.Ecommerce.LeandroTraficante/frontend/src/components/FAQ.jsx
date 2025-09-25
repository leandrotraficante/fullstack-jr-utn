import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FAQ() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography component="span" sx={{ width: '33%', flexShrink: 0 }}>
            ¿Cómo seleccionar un producto?
          </Typography>
          <Typography component="span" sx={{ color: 'text.secondary' }}>
            Guía para elegir tus productos
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Para seleccionar un producto, navega por las categorías disponibles en la página principal. 
            Haz clic en "Ver Productos" de la categoría que te interese. Una vez en la lista de productos, 
            puedes ver la descripción, precio y stock disponible. Haz clic en "Agregar al Carrito" 
            para añadir el producto a tu compra.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography component="span" sx={{ width: '33%', flexShrink: 0 }}>
            ¿Dónde ver mis productos seleccionados?
          </Typography>
          <Typography component="span" sx={{ color: 'text.secondary' }}>
            Consulta tu carrito de compras
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Todos los productos que hayas agregado al carrito aparecerán en el botón "Carrito" 
            ubicado en la barra de navegación superior. Desde allí podrás ver todos los items 
            seleccionados, modificar cantidades, eliminar productos y proceder al checkout 
            cuando estés listo para finalizar tu compra.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography component="span" sx={{ width: '33%', flexShrink: 0 }}>
            ¿Qué medios de pago existen?
          </Typography>
          <Typography component="span" sx={{ color: 'text.secondary' }}>
            Opciones de pago disponibles
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Aceptamos múltiples formas de pago para tu comodidad. Puedes pagar con tarjetas de crédito 
            y débito (Visa, Mastercard, American Express), transferencias bancarias, PayPal, 
            y también tenemos la opción de pago contra entrega para ciertas zonas. 
            Todos los pagos están protegidos con encriptación SSL para garantizar la seguridad 
            de tus datos.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
