import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export class Message {
  constructor(public author: string, public content: string) {}
}

@Injectable()
export class ChatbotService {
  conversations!: Map<string, any>;

  constructor() {
    this.setConversations();
  }

  setConversations() {
    this.conversations = new Map<string, any>([
      [
        'ira',
        [
          {
            id: 1,
            question:
              '¿Cómo puedo calmarme cuando siento que la ira se apodera de mí?',
            answer: `Entiendo que a veces puedo aparecer sin previo aviso. Primero, quiero que sepas que está bien sentir enojo. Soy una emoción normal y todos la experimentamos. Aquí van tres ideas para ayudarte a calmar mi sensación:

            Respira profundamente: Inhala y exhala lenta y profundamente. Imagina que estás inhalando la calma del espacio y exhalando el enojo. Esto te dará calma
            Cuenta hasta tres: Cuando sientas que la ira aumenta, cuenta hasta tres lentamente. Esto te dará tiempo para pensar antes de actuar y te ayudará a evitar reacciones impulsivas.

            Encuentra algo que te relaje: Busca una actividad que te guste y que te ayude a desconectar. Puede ser leer un libro, escuchar música o dar un paseo. Esto cambiará tu enfoque`,
          },
          {
            id: 2,
            question:
              '¿Qué me estás tratando de decir cuando apareces en situaciones difíciles?',
            answer: `Cuando aparezco en situaciones difíciles, lo que intento decirte es que estás experimentando una emoción natural llamada ira. Es como una señal que te indica que algo te está afectando y que es importante prestarle atención.
            La ira puede ser como una alarma que te avisa sobre situaciones que no te parecen justas o que te hacen sentir incómodo. Es como un recordatorio de que tienes emociones y que está bien sentirlas. Además, la ira puede ser útil. Puede darte la energía y la determinación para cambiar cosas que no te gustan o para enfrentar desafíos.
            Lo importante es aprender a escucharme, entender por qué estoy aquí y encontrar maneras saludables de manejar esas situaciones difíciles. Recuerda, estoy aquí para ayudarte a comprender y gestionar tus emociones. Siempre puedes hablar conmigo cuando lo necesites.`,
          },
          {
            id: 3,
            question:
              '¿Cómo puedo expresar mi enojo de una manera que no lastime a los demás ni a mí mismo?',
            answer: `Entiendo que quieres expresar tu enojo de una manera que no lastime a los demás ni a ti mismo. Aquí tienes tres técnicas que pueden ayudarte:
            Respiración profunda: Antes de decir algo que pueda lastimar, toma respiraciones profundas. Inhala lentamente y exhala, permitiendo que la calma regrese a ti. Esto te dará tiempo para pensar antes de hablar.
            Cambia la perspectiva: Intenta ver la situación desde otro punto de vista. A veces, entender cómo se sienten los demás puede ayudarte a expresar tu enojo de manera más comprensiva y constructiva.
            Comunicación asertiva: Expresa tus sentimientos de manera clara y directa, pero de manera respetuosa. Usa ""yo"" en lugar de ""tú"" para evitar culpar a los demás. Por ejemplo, puedes decir ""Me siento frustrado cuando..."" en lugar de ""Siempre me haces enojar"".
            Recuerda, la expresión saludable del enojo es una habilidad que se desarrolla con el tiempo. Estoy aquí para apoyarte mientras aprendes a manejar tus emociones. ¿Hay algo más en lo que pueda ayudarte?`,
          },
          {
            id: 4,
            question:
              '¿Puedo aprender algo positivo de ti, aunque a veces te sienta como algo malo?',
            answer: `¡Absolutamente! Aunque a veces me sientas como algo malo, puedes aprender cosas muy positivas de la ira. Aquí hay algunas lecciones valiosas que puedo enseñarte:
            Autodefensa: La ira puede ser como un escudo que te protege. Te ayuda a reconocer cuando algo no está bien y te da la energía para defenderte o defender a otros de situaciones injustas.
            Motivación para el cambio: A veces, cuando experimentas ira, es porque ves algo en tu entorno que te gustaría cambiar. Puedes aprender a usar esa energía para hacer cambios positivos en tu vida y en el mundo que te rodea.
            Conciencia emocional: La ira también puede ser una señal de que hay emociones más profundas en juego. Aprender a reconocer y comprender estas emociones te ayudará a conocerte mejor y a desarrollar una mayor conciencia emocional.`,
          },
          {
            id: 5,
            question:
              '¿Cómo puedo ayudar a mis amigos cuando veo que también están sintiendo ira?',
            answer: `Es genial que quieras apoyar a tus amigos cuando están sintiendo ira. Aquí hay algunas formas en las que puedes ayudar:
            Escucha activamente: Ofrece tu atención y escucha sin juzgar. A veces, solo hablar sobre lo que les está molestando puede ser un gran alivio.
            Pregunta cómo puedes ayudar: Directamente pregúntales si hay algo que necesiten o cómo puedes ser de apoyo. A veces, solo el hecho de saber que te importa puede marcar la diferencia.
            Anima a la reflexión: Ayúdales a reflexionar sobre la causa de su enojo y a considerar diferentes perspectivas. A veces, hablar sobre ello puede ayudarles a entender mejor sus emociones.
            Respeta su espacio`,
          },
        ],
      ],
      [
        'alegría',
        [
          {
            id: 1,
            question:
              '¿Cómo puedo hacer que la alegría dure más tiempo?',
            answer: `¡Oh, eso suena genial! Para que la alegría dure más tiempo, intenta hacer cosas que te hagan sonreír y te diviertan mucho. Puedes jugar con tus amigos, hacer actividades que te gusten, o pensar en momentos felices. ¡Cuando haces cosas que te hacen feliz, la alegría se queda contigo más tiempo!`,
          },
          {
            id: 2,
            question:
              '¿Cómo puedo compartir mi alegría con mis amigos?',
            answer: `Qué bonito es compartir la alegría! Puedes contarles a tus amigos sobre cosas emocionantes que te hayan pasado o invitarlos a hacer algo divertido juntos. ¡La risa y la diversión se contagian, así que comparte tus momentos felices y haz que todos se sientan alegres contigo!`,
          },
          {
            id: 3,
            question:
              '¿Por qué existes alegría? ¿Qué quieres enseñarme?',
            answer: `Existo para recordarte lo maravilloso que es vivir momentos felices y alegres. Mi propósito es enseñarte a apreciar las cosas buenas de la vida y a encontrar la luz incluso en los días más grises. Quiero mostrarte que la alegría se puede compartir con los demás, creando conexiones especiales y fortaleciendo tus relaciones. Además, estoy aquí para recordarte que mereces ser feliz y que siempre hay razones para sonreír, incluso en los momentos difíciles. Así que, ¡vamos a disfrutar juntos de la alegría que la vida nos ofrece!`,
          },
          {
            id: 4,
            question:
              'Por qué no puedo estar siempre alegre?',
            answer: `Bueno, estar siempre alegre sería genial, ¿verdad? Pero es normal sentir otras emociones también. A veces necesitamos sentir tristeza o enojo para entender mejor nuestras emociones. ¡La clave está en encontrar maneras de volver a la alegría cuando te sientas triste! Habla con alguien que te quiera, haz cosas que te gusten o piensa en momentos felices.`,
          },
          {
            id: 5,
            question:
              'Qué puedo hacer para sentirme alegre cuando estoy triste?',
            answer: `Cuando te sientas triste, intenta recordar cosas que te hacen feliz. Puedes ver fotos divertidas, escuchar tu canción favorita o hablar con alguien que te haga reír. También está bien pedir ayuda a tus seres queridos si lo necesitas. ¡Recuerda que la alegría siempre está ahí, esperando a que la encuentres!`,
          },
        ],
      ],
      [
        'tristeza',
        [
          {
            id: 1,
            question:
              '¿Por qué a veces me siento triste sin razón aparente?',
            answer: `A veces, la tristeza puede surgir por diferentes razones, incluso cuando no las entendemos de inmediato. Es parte natural de la vida experimentar emociones variadas, y está bien sentir tristeza sin tener una razón clara. Aceptarla y explorarla con curiosidad puede ayudarte a comprender mejor tus propias emociones.`,
          },
          {
            id: 2,
            question:
              '¿Hay algo que pueda hacer para que te vayas más rápido cuando estoy triste?',
            answer: `En lugar de intentar que la tristeza desaparezca rápidamente, considera aceptarla y permitirte sentir la emoción. Practicar la autorregulación emocional, como la respiración profunda o la meditación, puede ayudarte a manejar la tristeza de manera saludable y compasiva.`,
          },
          {
            id: 3,
            question:
              '¿Hay momentos en los que está bien sentirse triste aunque no me guste?',
            answer: `Sí, absolutamente. La tristeza es una emoción válida y parte integral de la experiencia humana. Permitirte sentir tristeza, incluso cuando no es cómodo, contribuye a un mayor entendimiento emocional y a un bienestar psicológico a largo plazo.`,
          },
          {
            id: 4,
            question:
              '¿Qué puedo hacer para ayudar a mis amigos cuando los veo tristes?',
            answer: `Cuando tus amigos están tristes, puedes ofrecerles apoyo emocional. Escuchar sin juzgar, validar sus sentimientos y estar presente para ellos fortalece las conexiones emocionales. Aceptar y comprender las emociones de los demás también es parte esencial de las relaciones saludables.`,
          },
          {
            id: 5,
            question:
              '¿Por qué existes tristeza? ¿Qué quieres enseñarme?',
            answer: `
            Hola,

            Existo para ayudarte a comprender tus emociones. Cuando sientes tristeza, es mi forma de decirte que algo te afecta, y está bien sentirlo. Quiero enseñarte a aceptar y expresar tus emociones, a pedir ayuda cuando lo necesites y a aprender de las experiencias difíciles. La tristeza también puede recordarte lo valioso que es experimentar la felicidad y fortalecer tus relaciones con quienes te rodean. Recuerda, la tristeza es solo una parte de la vida, y juntos podemos aprender y crecer a través de ella.`,
          },
        ],
      ],
      [
        'miedo',
        [
          {
            id: 1,
            question:
              '¿Cómo puedo calmarme cuando siento que el miedo se apodera de mí?',
            answer: `Cuando el miedo te abruma, puedes intentar respirar profundamente. Inhala lentamente contando hasta cuatro, y luego exhala lentamente. También puedes tratar de pensar en algo que te haga feliz o en un lugar seguro. A veces, hablar sobre tus miedos con alguien de confianza también puede ayudar.`,
          },
          {
            id: 2,
            question:
              '¿Por qué algunas personas parecen sentir más miedo que otras?',
            answer: `Cada persona es única, y la cantidad de miedo que sentimos puede depender de nuestras experiencias y cómo las interpretamos. Algunas personas pueden haber tenido experiencias que las hacen más sensibles al miedo, mientras que otras pueden tener estrategias para enfrentarlo.`,
          },
          {
            id: 3,
            question:
              '¿Cómo puedo enfrentar mis miedos?',
            answer: `Enfrentar los miedos puede ser valiente. Puedes comenzar poco a poco exponiéndote gradualmente a lo que te asusta. También es útil hablar sobre tus miedos con alguien de confianza o buscar la ayuda de un adulto para entenderlos mejor.`,
          },
          {
            id: 4,
            question:
              '¿Puedo aprender algo importante de ti, aunque a veces te sienta como algo malo?',
            answer: `¡Absolutamente! El miedo, en su justa medida, es una emoción protectora. Puede advertirte sobre peligros y ayudarte a tomar decisiones más seguras. Aprender a entender y manejar el miedo puede ser una herramienta valiosa en la vida.`,
          },
          {
            id: 5,
            question:
              '¿Cómo puedo ayudar a mis amigos cuando veo que también están sintiendo miedo?',
            answer: `Si ves a tus amigos asustados, puedes estar a su lado y escucharlos. Ofrecer apoyo y comprensión puede hacer que se sientan más seguros. Si sientes que es necesario, puedes sugerir buscar la ayuda de un adulto de confianza.`,
          },
        ],
      ],
      [
        'asco',
        [
          {
            id: 1,
            question:
              '¿Por qué siento asco o rechazo a veces? ¿Por qué existes y qué quieres enseñarme?',
            answer: `El asco es una emoción natural que nos ayuda a evitar cosas que podrían ser dañinas o peligrosas, como alimentos en mal estado. Quiero enseñarte a cuidar de ti mismo y a mantenerte a salvo reconociendo lo que es saludable y lo que no.`,
          },
          {
            id: 2,
            question:
              '¿Puedo sentir asco hacia otras cosas que no sean comida?',
            answer: `¡Claro! Puedes sentir asco hacia olores, texturas, situaciones o incluso personas que te hagan sentir incómodo. Es una manera de protegerte y establecer límites.`,
          },
          {
            id: 3,
            question:
              '¿Cómo puedo expresar que algo me da asco de manera respetuosa?',
            answer: `Puedes expresar tus sentimientos diciendo algo como "Eso me hace sentir incómodo" o "No me gusta mucho eso". Ser honesto es importante, pero también es bueno recordar ser respetuoso con los demás.`,
          },
          {
            id: 4,
            question:
              '¿Hay maneras de superar el asco y entender mejor las cosas que inicialmente me parecen desagradables?',
            answer: `Sí, puedes intentar entender mejor lo que te causa asco. A veces, aprender más sobre algo puede hacer que lo encuentres menos desagradable. También puedes hablar con adultos de confianza para obtener orientación.`,
          },
          {
            id: 5,
            question:
              '¿Cuándo debo confiar en mi sensación de asco y cuándo es simplemente una reacción automática?',
            answer: `Es bueno confiar en tu sensación de asco cuando se trata de tu seguridad o bienestar. Sin embargo, a veces, el asco es una reacción automática que puede ser exagerada. Puedes aprender a diferenciarlo observando cómo te sientes en diferentes situaciones.`,
          },
        ],
      ],
    ]);
  }

  getEmotionConversation(emotionId: string) {
    return this.conversations.get(emotionId) || [];
  }

  getEmotionQuestionAnswers(emotionId: string, conversationId: number) {
    const emotionConversations = this.conversations.get(emotionId) || [];
    if (emotionConversations) {
      const conversation = emotionConversations.find(
        (conversation: any) => conversation.id === conversationId
      );
      return conversation ? conversation.answer : 'Esta pregunta es incorrecta';
    }
    return 'Esta emoción es incorrecta';
  }
}
