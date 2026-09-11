const NUMERO_WHATSAPP = '5544999990000'

export function buildWhatsappUrl(mensagem: string): string {
  return `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(mensagem)}`
}
