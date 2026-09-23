// Fechas dinámicas para pruebas en el data mock:
// Contacto 1 (Marcos): Hoy a las 14:30 -> Sidebar muestra "14:30"
// Contacto 2 (John Smith): Hoy a las 08:21 -> Sidebar muestra "08:21"
// Contacto 3 (Jane Doe): Ayer a las 12:15 -> Sidebar muestra "Ayer"
// Contacto 4 (Samantha Lee): Fecha más lejana (hace 5 días, 09:35) -> Sidebar muestra "[DD/MM/AAAA]"

const ahora = new Date();

const fechaHoy1 = new Date();
fechaHoy1.setHours(14, 30, 0, 0);

const fechaHoy2 = new Date();
fechaHoy2.setHours(8, 21, 0, 0);

const fechaAyer = new Date();
fechaAyer.setDate(ahora.getDate() - 1);
fechaAyer.setHours(12, 15, 0, 0);

const fechaLejana = new Date();
fechaLejana.setDate(ahora.getDate() - 5);
fechaLejana.setHours(9, 35, 0, 0);

const contact_list_server = [
    {
        id: 1,
        name: 'Marcos',
        last_connection: 'hoy 14:30',
        image: "https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fwww.gravatar.com%2Favatar%2F2c7d99fe281ecd3bcd65ab915bac6dd5%3Fs%3D250",
        messages: [
            { id: 1, content: 'Hola! ¿Jugamos al fútbol el sábado?', author: 'Marcos', created_at: 'ayer 14:05', status: 'seen' },
            { id: 2, content: 'Dale, yo estoy', author: 'YO', created_at: 'ayer 14:12', status: 'seen' },
            { id: 3, content: 'Buenísimo, aviso a los pibes', author: 'Marcos', created_at: 'ayer 14:20', status: 'unseen' },
            { id: 4, content: 'Hey qué tal? Hay que juntarnos! La semana que viene es mi cumple y estas invitada', author: 'Marcos', created_at: 'hoy 14:30', status: 'unseen' }
        ],
        last_message: 'Hey qué tal? Hay que juntarnos! La semana que viene es mi cumple y estas invitada',
        unread_messages: 2,
        last_message_time: fechaHoy1.toISOString()
    },
    {
        id: 2,
        name: 'John Smith',
        last_connection: 'hoy 08:21',
        image: "https://i.pinimg.com/736x/89/28/4b/89284b5c67cac49c7b0be588a335932a.jpg",
        messages: [
            { id: 1, content: '¿en qué andás?', author: 'YO', created_at: 'hoy 08:10', status: 'seen' },
            { id: 2, content: 'tomando un café, mientras pruebo el celu', author: 'John Smith', created_at: 'hoy 08:15', status: 'unseen' },
            { id: 3, content: '¿Se ve bien la foto?', author: 'John Smith', created_at: 'hoy 08:18', status: 'unseen' },
            { id: 4, content: 'Testeando... 1, 2, 3, probando si funciona esto', author: 'John Smith', created_at: 'hoy 08:21', status: 'unseen' }
        ],
        last_message: 'Testeando... 1, 2, 3, probando si funciona esto',
        unread_messages: 3,
        last_message_time: fechaHoy2.toISOString()
    },
    {
        id: 3,
        name: 'Jane Doe',
        last_connection: 'ayer 12:15',
        image: "https://i.pinimg.com/736x/1a/98/03/1a9803d93ff615ea7fbc198ba53401c5.jpg",
        messages: [
            { id: 1, content: '¡Hola Jane! ¿Cómo andás?', author: 'YO', created_at: '12:00', status: 'seen' },
            { id: 2, content: 'Todo bien por acá', author: 'Jane Doe', created_at: '12:05', status: 'seen' },
            { id: 3, content: 'Holaaaaaaa queridoooo tanto tiempo', author: 'Jane Doe', created_at: 'ayer 12:15', status: 'unseen' }
        ],
        last_message: 'Holaaaaaaa queridoooo tanto tiempo',
        unread_messages: 1,
        last_message_time: fechaAyer.toISOString()
    },
    {
        id: 4,
        name: 'Samantha Lee',
        last_connection: 'hace unos días',
        image: "https://i.pinimg.com/736x/b7/5f/d2/b75fd2fc1f8cbb7f65bb4f1a87dcc71e.jpg",
        messages: [
            { id: 1, content: '¿Vamos a la marcha el viernes?', author: 'YO', created_at: 'hace unos días 09:30', status: 'seen' },
            { id: 2, content: 'Genial, vamos juntos!', author: 'Samantha Lee', created_at: 'hace unos días 09:35', status: 'seen' }
        ],
        last_message: 'Genial, vamos juntos!',
        unread_messages: null,
        last_message_time: fechaLejana.toISOString()
    }
]

export default contact_list_server
