/**
 * Utilities for Calendar export (.ics) and Maps navigation
 */

export interface WeddingEventData {
  id: string;
  title: string;
  subtitle: string;
  dateStr: string;
  timeStr: string;
  startDateIso: string; // e.g. 20261110T090000Z
  endDateIso: string;
  location: string;
  addressQuery: string;
  description: string;
}

export const WEDDING_EVENTS: WeddingEventData[] = [
  {
    id: 'mise-en-chambre',
    title: 'Mise en chambre',
    subtitle: 'Célébration traditionnelle & préparatifs',
    dateStr: 'Mardi 10 Novembre 2026',
    timeStr: '09H00',
    startDateIso: '20261110T090000Z',
    endDateIso: '20261110T140000Z',
    location: 'Angré cité star 11 villa 71, Abidjan',
    addressQuery: 'Angre cite star 11 Abidjan',
    description: 'Mariage de Fah Adam\'s & Ramatou — Cérémonie de mise en chambre.',
  },
  {
    id: 'mariage-religieux-reception',
    title: 'Mariage Religieux & Réception',
    subtitle: 'Bénédiction nuptiale islamique suivie du banquet',
    dateStr: 'Jeudi 12 Novembre 2026',
    timeStr: '10H30 : Nikah | 12H00 : Réception',
    startDateIso: '20261112T103000Z',
    endDateIso: '20261112T180000Z',
    location: 'Mosquée Salam du Plateau (10h30) puis Espace Jeny\'s Angré (12h00)',
    addressQuery: 'Grande Mosquee Salam du Plateau Abidjan',
    description: 'Mariage de Fah Adam\'s & Ramatou — 10H30 : Mariage religieux à la Mosquée Salam du Plateau, suivi à 12H00 de la Réception à l\'Espace Jeny\'s (Angré carrefour King Déco).',
  },
  {
    id: 'sortie-mariee',
    title: 'Sortie de la Mariée',
    subtitle: 'Célébration festive & danses traditionnelles',
    dateStr: 'Samedi 14 Novembre 2026',
    timeStr: '14H00',
    startDateIso: '20261114T140000Z',
    endDateIso: '20261114T200000Z',
    location: 'Terrain de la cité star 11, Abidjan',
    addressQuery: 'Cite star 11 Angre Abidjan',
    description: 'Mariage de Fah Adam\'s & Ramatou — Grande sortie de la mariée au son des tam-tams.',
  },
];

export function downloadCalendarFile(event: WeddingEventData) {
  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Fah Adams & Ramatou Wedding//FR',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:${event.id}-202611@wedding-fah-ramatou`,
    `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z`,
    `DTSTART:${event.startDateIso}`,
    `DTEND:${event.endDateIso}`,
    `SUMMARY:Mariage Fah Adam's & Ramatou — ${event.title}`,
    `DESCRIPTION:${event.description}`,
    `LOCATION:${event.location}`,
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', `mariage-fah-ramatou-${event.id}.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export function downloadFullWeddingCalendar() {
  const eventsBlocks = WEDDING_EVENTS.map((event) => [
    'BEGIN:VEVENT',
    `UID:${event.id}-202611@wedding-fah-ramatou`,
    `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z`,
    `DTSTART:${event.startDateIso}`,
    `DTEND:${event.endDateIso}`,
    `SUMMARY:Mariage Fah Adam's & Ramatou — ${event.title}`,
    `DESCRIPTION:${event.description}`,
    `LOCATION:${event.location}`,
    'STATUS:CONFIRMED',
    'END:VEVENT',
  ].join('\r\n')).join('\r\n');

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Fah Adams & Ramatou Wedding//FR',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    eventsBlocks,
    'END:VCALENDAR',
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'mariage-fah-adams-ramatou-programme-complet.ics');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
