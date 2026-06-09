export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

export const EMERGENCY_KEYWORDS = [
  'chest pain',
  'difficulty breathing',
  'severe bleeding',
  'loss of consciousness',
  'stroke symptoms',
  'suicidal',
  'overdose',
];

export const checkEmergency = (text: string): boolean => {
  const lowerText = text.toLowerCase();
  return EMERGENCY_KEYWORDS.some((keyword) => lowerText.includes(keyword));
};
