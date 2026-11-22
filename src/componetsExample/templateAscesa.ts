import image1 from '../assets/img/image1.png';
import image2 from '../assets/img/image2.png';
import image3 from '../assets/img/image3.png';
import image4 from '../assets/img/image4.png';
import image5 from '../assets/img/image5.png';
import sleepImage from '../assets/img/category-sleep.jpg';
import nutritionImage from '../assets/img/category-nutrition.png';
import movementImage from '../assets/img/category-movement.jpg';
import waterImage from '../assets/img/category-water.jpg';
import meditationImage from '../assets/img/category-meditation.jpg';
import journalImage from '../assets/img/category-journal.jpg';
import quietImage from '../assets/img/category-quiet.jpg';
import gratitudeImage from '../assets/img/category-gratitude.jpg';
import earlyRisingImage from '../assets/img/category-early-rising.jpg';
import planningImage from '../assets/img/category-planning.jpg';
import familyImage from '../assets/img/category-family.jpg';
import partnershipImage from '../assets/img/category-partnership.jpg';
import kindnessImage from '../assets/img/category-kindness.jpg';
import boundariesImage from '../assets/img/category-boundaries.jpg';
import conversationImage from '../assets/img/category-conversation.jpg';

export interface AsceticTemplate {
  id: string;
  img: string;
  title: string;
  titleEn: string;
  titleNl: string;
  description: string;
  descriptionEn: string;
  descriptionNl: string;
  result: string;
  resultEn: string;
  resultNl: string;
  durationDays: number;
}

export interface TemplateSection {
  id: string;
  title: Text;
  optionIds: string[];
}

export const templateStorageKey = 'my-ascetic:selected-template';

type Text = [string, string, string];
type Category = { id: string; personalId?: string; title: Text; description: Text; result: Text; durationDays?: number };
type SectionData = { id: string; title: Text; categories: Category[] };

const categoryImages: Record<string, string> = {
  sleep: sleepImage, nutrition: nutritionImage, movement: movementImage, water: waterImage,
  meditation: meditationImage, journal: journalImage, quiet: quietImage, gratitude: gratitudeImage,
  'early-rising': earlyRisingImage, planning: planningImage, family: familyImage,
  partnership: partnershipImage, kindness: kindnessImage, boundaries: boundariesImage,
  communication: conversationImage,
};

const personalTemplates: Record<string, AsceticTemplate> = {
  'no-sweets': {
    id: 'no-sweets', img: image3, title: 'Без солодкого', titleEn: 'No sweets', titleNl: 'Geen snoep',
    description: 'Не їсти цукерки, печиво та інші солодощі.', descriptionEn: 'Avoid candy, cookies, and other sweets.', descriptionNl: 'Eet geen snoep, koekjes en andere zoetigheden.',
    result: "Покращити здоров'я та самопочуття", resultEn: 'Improve your health and well-being', resultNl: 'Verbeter je gezondheid en welzijn', durationDays: 7,
  },
  'less-social-media': {
    id: 'less-social-media', img: image1, title: 'Менше соцмереж', titleEn: 'Less social media', titleNl: 'Minder sociale media',
    description: 'Не користуватися соцмережами після 21:00.', descriptionEn: 'Avoid social media after 9:00 PM.', descriptionNl: 'Gebruik na 21.00 uur geen sociale media.',
    result: 'Звільнити час для відпочинку та покращити сон.', resultEn: 'Make time to rest and improve your sleep.', resultNl: 'Maak tijd voor rust en slaap beter.', durationDays: 14,
  },
  'daily-reading': {
    id: 'daily-reading', img: image2, title: 'Читати щодня', titleEn: 'Read every day', titleNl: 'Elke dag lezen',
    description: 'Читати щонайменше 20 хвилин щодня.', descriptionEn: 'Read for at least 20 minutes every day.', descriptionNl: 'Lees elke dag minstens 20 minuten.',
    result: 'Сформувати звичку читати регулярно.', resultEn: 'Build a regular reading habit.', resultNl: 'Ontwikkel een vaste leesgewoonte.', durationDays: 21,
  },
  'daily-english': {
    id: 'daily-english', img: image4, title: 'Англійська щодня ', titleEn: 'English every day', titleNl: 'Elke dag Engels',
    description: 'Англійська щодня по 30 хвилин на день', descriptionEn: 'Study English for 30 minutes every day.', descriptionNl: 'Leer elke dag 30 minuten Engels.',
    result: 'Знання мови на рівні A2', resultEn: 'Reach A2 level in English.', resultNl: 'Bereik niveau A2 in het Engels.', durationDays: 90,
  },
  'daily-programming': {
    id: 'daily-programming', img: image5, title: 'Програмування ', titleEn: 'Programming', titleNl: 'Programmeren',
    description: 'Займатися програмуванням по 30 хвилин щодня.', descriptionEn: 'Practice programming for 30 minutes every day.', descriptionNl: 'Programmeer elke dag 30 minuten.',
    result: 'Отримати роботу із зарплатою 3000$', resultEn: 'Get a job with a $3,000 salary.', resultNl: 'Vind een baan met een salaris van $3.000.', durationDays: 21,
  },
};

// Редагуйте цей список: кожний розділ містить категорії, а особисті шаблони можна вказати через personalId.
const sectionData: SectionData[] = [
  {
    id: 'health', title: ['Здоров’я', 'Health', 'Gezondheid'], categories: [
      { id: 'sleep', title: ['Сон', 'Sleep', 'Slaap'], description: ['Щодня лягати спати не пізніше 21:00.', 'Go to bed no later than 9:00 PM every day.', 'Elke dag uiterlijk om 21:00 uur naar bed gaan.'], result: ['Покращити якість сну та відновлення.', 'Improve sleep quality and recovery.', 'Verbeter je slaapkwaliteit en herstel.'] },
      { id: 'nutrition', title: ['Харчування', 'Nutrition', 'Voeding'], description: ['Їсти усвідомлено, не відволікаючись на гаджети.📵', 'Eat mindfully, without distractions from digital devices.📵', 'Bewust eten, zonder afleiding van digitale apparaten.📵'], result: ['Підтримати енергію та уважніше ставитися до харчування.', 'Support your energy and build mindful eating habits.', 'Ondersteun je energie en eet bewuster.'] },
      { id: 'movement', title: ['Красиве тіло', 'Beautiful body', 'Een mooi lichaam'], description: ['Щодня виходити на пробіжку.', 'Go for a run every day.', 'Elke dag gaan hardlopen.'], result: ['Зробити фізичну активність регулярною звичкою.', 'Make physical activity a regular habit.', 'Maak bewegen een vaste gewoonte.'] },
      { id: 'water', title: ['Пити воду', 'Drink water', 'Water drinken'], description: ['Випивати одну склянку води щоранку.', 'Drink one glass of water every morning.', 'Elke ochtend één glas water drinken.'], result: ['Сформувати уважну звичку підтримувати водний баланс.', 'Build a mindful hydration habit.', 'Ontwikkel een bewuste gewoonte om voldoende te drinken.'] },
      { id: 'no-sweets', personalId: 'no-sweets', title: ['', '', ''], description: ['', '', ''], result: ['', '', ''] },
    ],
  },
  {
    id: 'mindfulness', title: ['Усвідомленість', 'Mindfulness', 'Bewustzijn'], categories: [
      { id: 'meditation', title: ['Медитація', 'Meditation', 'Meditatie'], description: ['Медитувати 10 хвилин щодня у спокійному місці.', 'Meditate for 10 minutes each day in a quiet place.', 'Mediteer elke dag 10 minuten op een rustige plek.'], result: ['Створити регулярний час для спокою та зосередження.', 'Create regular time for calm and focus.', 'Maak regelmatig tijd voor rust en aandacht.'] },
      { id: 'journal', title: ['Щоденник думок', 'Reflection journal', 'Reflectiedagboek'], description: ['Щодня записувати думки, події та спостереження у щоденник.', 'Write down your thoughts, events, and observations each day.', 'Schrijf elke dag je gedachten, gebeurtenissen en observaties op.'], result: ['Краще розуміти свої думки та емоції.', 'Understand your thoughts and emotions better.', 'Begrijp je gedachten en gevoelens beter.'] },
      { id: 'quiet', title: ['Час у тиші', 'Quiet time', 'Tijd in stilte'], description: ['Проводити 15 хвилин на день без музики, розмов і сповіщень.', 'Spend 15 minutes a day without music, conversation, or notifications.', 'Breng dagelijks 15 minuten door zonder muziek, gesprekken of meldingen.'], result: ['Додавати до дня моменти тиші та відновлення.', 'Add moments of quiet and rest to your day.', 'Voeg momenten van stilte en rust toe aan je dag.'] },
      { id: 'gratitude', title: ['Вдячність', 'Gratitude', 'Dankbaarheid'], description: ['Щодня записувати три речі, за які ви вдячні.', 'Write down three things you are grateful for each day.', 'Schrijf elke dag drie dingen op waarvoor je dankbaar bent.'], result: ['Помічати більше позитивних подій у повсякденні.', 'Notice more positive moments in everyday life.', 'Merk meer positieve momenten op in het dagelijks leven.'] },
      { id: 'less-social-media', personalId: 'less-social-media', title: ['', '', ''], description: ['', '', ''], result: ['', '', ''] },
    ],
  },
  {
    id: 'development', title: ['Розвиток', 'Development', 'Ontwikkeling'], categories: [
      { id: 'early-rising', title: ['Ранній підйом', 'Early rising', 'Vroeg opstaan'], description: ['Прокидатися щодня в обраний час.', 'Wake up at your chosen time each day.', 'Sta elke dag op het gekozen tijdstip op.'], result: ['Сформувати стабільний ранковий режим.', 'Build a consistent morning routine.', 'Ontwikkel een vaste ochtendroutine.'] },
      { id: 'planning', title: ['Планування дня', 'Daily planning', 'Dagplanning'], description: ['Щоранку визначати головні справи на день.', 'Set your main priorities for the day each morning.', 'Bepaal elke ochtend je belangrijkste taken voor de dag.'], result: ['Краще розподіляти час і зосереджуватися на важливому.', 'Manage your time better and focus on what matters.', 'Deel je tijd beter in en focus op wat belangrijk is.'] },
      { id: 'daily-reading', personalId: 'daily-reading', title: ['', '', ''], description: ['', '', ''], result: ['', '', ''] },
      { id: 'daily-english', personalId: 'daily-english', title: ['', '', ''], description: ['', '', ''], result: ['', '', ''] },
      { id: 'daily-programming', personalId: 'daily-programming', title: ['', '', ''], description: ['', '', ''], result: ['', '', ''] },
    ],
  },
  {
    id: 'relationships', title: ['Стосунки', 'Relationships', 'Relaties'], categories: [
      { id: 'family', title: ['Час із сім’єю', 'Family time', 'Tijd met familie'], description: ['Щодня приділяти близьким щонайменше 1 годину без телефону та інших відволікань.', 'Spend at least one hour every day with loved ones, without phones or other distractions.', 'Besteed elke dag minstens één uur aan je dierbaren, zonder telefoons of andere afleidingen.'], result: ['Зробити спілкування з рідними регулярним пріоритетом.', 'Make time with loved ones a regular priority.', 'Maak tijd met dierbaren een vaste prioriteit.'] },
      { id: 'partnership', title: ['Увага до партнера', 'Be present with your partner', 'Aandacht voor je partner'], description: ['Щодня знаходити час, щоб сказати партнеру або партнерці «Я тебе люблю» щонайменше 3 рази.', 'Make time every day to tell your partner “I love you” at least 3 times.', 'Neem elke dag de tijd om minstens 3 keer tegen je partner te zeggen: "Ik hou van je."'], result: ['Підтримувати відкрите та уважне спілкування.', 'Support open and attentive communication.', 'Stimuleer open en aandachtige communicatie.'] },
      { id: 'kindness', title: ['Доброта щодня', 'Daily kindness', 'Elke dag vriendelijk'], description: ['Щодня робити один невеликий добрий вчинок.', 'Do one small act of kindness each day.', 'Doe elke dag één kleine vriendelijke daad.'], result: ['Частіше проявляти турботу у повсякденні.', 'Show care more often in everyday life.', 'Toon vaker zorg en aandacht in het dagelijks leven.'] },
      { id: 'boundaries', title: ['Особисті межі', 'Personal boundaries', 'Persoonlijke grenzen'], description: ['Щодня щонайменше один раз помічати власні потреби та спокійно озвучувати свої межі.', 'At least once a day, recognize your own needs and calmly communicate your boundaries.', 'Herken dagelijks minstens één keer je eigen behoeften en geef rustig je grenzen aan.'], result: ['Краще розуміти власні потреби та поважати їх.', 'Understand and respect your needs better.', 'Begrijp en respecteer je behoeften beter.'] },
      { id: 'communication', title: ['Живе спілкування', 'Meaningful conversation', 'Echt contact'], description: ['Щодня виходити на прогулянку та спілкуватися з людьми наживо.', 'Go for a walk and interact with people face-to-face every day.', 'Elke dag een wandeling maken en persoonlijk contact hebben met mensen.'], result: ['Приділяти більше уваги живому спілкуванню.', 'Give more attention to in-person connection.', 'Geef meer aandacht aan persoonlijk contact.'] },
    ],
  },
];

function makeTemplate(sectionId: string, category: Category, index: number): AsceticTemplate {
  if (category.personalId) return personalTemplates[category.personalId];
  return {
    id: `${sectionId}-${category.id}`, img: categoryImages[category.id],
    title: category.title[0], titleEn: category.title[1], titleNl: category.title[2],
    description: category.description[0], descriptionEn: category.description[1], descriptionNl: category.description[2],
    result: category.result[0], resultEn: category.result[1], resultNl: category.result[2],
    durationDays: category.durationDays ?? [7, 14, 21, 30, 90][index],
  };
}

export const asceticTemplates: AsceticTemplate[] = sectionData.flatMap(section =>
  section.categories.map((category, index) => makeTemplate(section.id, category, index)),
);

export const templateSections: TemplateSection[] = sectionData.map(section => ({
  id: makeTemplate(section.id, section.categories[0], 0).id,
  title: section.title,
  optionIds: section.categories.map((category, index) => makeTemplate(section.id, category, index).id),
}));
