// Configuration pour Mistral 7B via l'API Mistral AI
export const MISTRAL_CONFIG = {
  name: 'Mistral AI',
  baseUrl: 'https://api.mistral.ai/v1/chat/completions',
  model: 'open-mistral-7b',
  modelName: 'Mistral 7B',
  description: 'Modèle Mistral 7B optimisé pour les tâches de conversation et d\'assistance',
  pricing: {
    free: '20M tokens/mois',
    paid: '$0.14/1M tokens'
  },
  features: [
    'Réponses en français',
    'Contexte personnalisé',
    'Gestion de conversation',
    'Optimisé pour le développement'
  ],
  limits: {
    maxTokens: 32000,
    maxTokensPerRequest: 1000
  }
} as const;

// Fonction pour obtenir la configuration Mistral
export function getMistralConfig() {
  return MISTRAL_CONFIG;
}

// Fonction pour vérifier si l'API Mistral est configurée
export function isMistralConfigured(): boolean {
  return !!process.env.MISTRAL_API_KEY;
}
