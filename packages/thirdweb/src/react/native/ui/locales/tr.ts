import {
  type DeepPartial,
  immutableOverride,
} from "../../../core/utils/applyOverrides.js";
import type { ThirdwebLocale } from "./types.js";

/**
 * @internal
 */
export function trDefault(): ThirdwebLocale {
  return {
    connect_wallet: {
      label: "Cüzdanı Bağla",
    },
    connect_wallet_details: {
      additional_actions: "Ek İşlemler",
      address_copied_clipboard: "Adres panoya kopyalandı",
      backup_wallet: "Yedek Cüzdan",
      backup_personal_wallet: "Kişisel cüzdanı yedekle",
      import_wallet: "Cüzdanı İçe Aktar",
      connected_to_smart_wallet: "Akıllı Cüzdana Bağlanıldı",
      current_network: "Mevcut Ağ",
      backup: "Yedekle",
      connect_to_app: "Uygulamaya Bağlan",
      guest: "Misafir",
      connect: "Bağlan",
      new_to_wallets: "Cüzdanlara yeni misiniz?",
      view_transaction_history: "İşlem Geçmişini Görüntüle",
      get_started: "Başlayın",
      receive_funds: "Fon Al",
      search_or_paste_token: "Token adresini ara veya yapıştır",
      connect_a_wallet: "Bir Cüzdana Bağlan",
      continue_as_guest: "Misafir olarak devam et",
      tos: "Hizmet Şartları",
      privacy_policy: "Gizlilik Politikası",
      by_connecting_you_agree: "Bağlanarak, kabul etmiş olursunuz",
      copy_address_or_scan:
        "Cüzdan adresini kopyala veya fonları bu cüzdana göndermek için QR kodunu tara.",
      request_testnet_funds: "Testnet Fonları Talep Et",
      your_address: "Adresiniz",
      qr_code: "QR Kodu",
      select_token: "Token seç",
      send_to: "Gönder",
      send_funds: "Fon Gönder",
      no_tokens_found: "Token bulunamadı",
      confirm_in_wallet: "Cüzdanınızda onaylayın",
      select_network: "Ağ Seç",
      switch_to: "Geçiş Yap",
      no_supported_chains_detected: "Desteklenen bir ağ tespit edilemedi",
      recommended: "Önerilir",
      network_mismatch: "Kontrat ve cüzdanınız arasında bir ağ uyuşmazlığı var",
    },
    connecting_wallet: {
      creating_encrypting:
        "Aygıt cüzdanınızı oluşturmak, şifrelemek ve güvene almak.",
      connecting_your_wallet: "Cüzdana bağlanmak",
      connecting_through_pop_up:
        "Cüzdan açılır penceresi yoluyla uygulamaya giriş yapın ve bağlanın",
    },
    local_wallet: {
      guest_wallet: "Misafir Cüzdanı",
      backup_your_wallet: "Cüzdanınızın yedeğini alın",
      create_new_wallet: "Yeni cüzdan oluşturun",
      private_key_mnemonic: "Ya da Özel anahtar veya Kelimeler",
      private_key_mnemonic_placeholder: "Özel anahtar / Kelimeler",
      application_can_authorize_transactions:
        "Bu uygulama cüzdanınız adına herhangi bir izin olmadan işlem başlatabilir. Yalnızca güvenilir uygulamalara giriş yapmanızı öneriyoruz.",
      double_check_password:
        "Lütfen, parolanızı veya gizli anahtarınızı kontrol edin.",
      error_accessing_file: "Dosyaya erişirken hata. Lütfen tekrar deneyin.",
      wallet_address: "Cüzdan Adresi",
      this_will_download_json:
        "Bu, cüzdan bilgilerinizi içeren bir JSON dosyasını parola ile şifrelenmiş olarak cihazınıza indirecektir.",
      this_is_a_temporary_wallet:
        "Bu geçici bir misafir cüzdanıdır. Erişimi kaybetmemek için bir yedeğini indirin.",
    },
    smart_wallet: {
      switch_to_smart: "Akıllı Cüzdan'a Geçiş Yapın",
      switch_to_personal: "Kişisel Cüzdan'a Geçiş Yapın",
      network_mismatch: "Ağ Uyuşmazlığı",
      connecting: "Bağlanılıyor",
    },
    embedded_wallet: {
      request_new_code: "Yeni kod iste",
      sign_in: "Giriş Yap",
      sign_in_google: "Google ile Giriş Yap",
      sign_in_facebook: "Facebook ile Giriş Yap",
      sign_in_apple: "Apple ile Giriş Yap",
      sign_in_email: "E-posta ile Giriş Yap",
      enter_your_email: "E-posta adresinizi girin",
      forgot_password: "Parolamı unuttum",
      enter_account_recovery_code: "Hesap kurtarma kodunu girin",
      backup_your_account: "Hesabınızı yedekleyin",
      create_password: "Parola oluştur",
      enter_password: "Parola gir",
      set_password_message: "Hesabınızı korumak için bir parola belirleyin",
      enter_password_for_email: "Parola girin",
      make_sure_you_save_it: "Kaydettiğinizden emin olun",
    },
    wallet_connect: {
      no_results_found: "Sonuç bulunamadı",
      search_wallets: "Cüzdanları Ara",
    },
    common: {
      connect_app: "Uygulamaya bağlan",
      unknown_network: "Bilinmeyen Ağ",
      fetching: "Yükleniyor...",
      password: "Parola",
      reject: "Reddet",
      approve: "Onayla",
      switch_network: "Ağ Değiştir",
      import: "İçe Aktar",
      username: "Kullanıcı Adı",
      amount: "Miktar",
      send: "Gönder",
      receive: "Al",
      continue: "Devam",
      error_switching_network: "Ağ değiştirirken hata",
      or: "VEYA",
      from: "kimden",
      to: "kime",
      next: "Sonraki",
      learn_more: "Daha Fazla Öğren",
    },
  };
}

/**
 * Calling this function will return the default Turkish locale object to be set on `ThirdwebProvider` to localize the thirdweb components.
 *
 * You can also overrides parts of the default locale object by passing an object with the same structure as the default locale object and only those parts will be overridden.
 * @param overrides - An object with the same structure as the default locale object to override parts of the default locale object.
 * @example
 * ### Use default Locale
 * ```tsx
 * const turkish = tr();
 * ```
 *
 * ### Override Locale
 * ```ts
 * const turkish = en({
 *  connectWallet: {
 *    signIn: "Mag-sign in!"
 *  }
 * })
 * ```
 *
 * Pass it to [`ThirdwebProvider`](https://portal.thirdweb.com/typescript/v5/react/ThirdwebProvider)'s `locale` prop to localize the thirdweb components.
 *
 * ```tsx
 * function Example() {
 *   return (
 *      <ThirdwebProvider locale={turkish}>
 *        <App />
 *      </ThirdwebProvider>
 *    )
 * }
 * ```
 * @locale
 * @returns A Tagalog locale object with the default values.
 */
export function tr(overrides?: DeepPartial<ThirdwebLocale>) {
  const defaultObj = trDefault();
  if (!overrides) {
    return defaultObj;
  }

  return immutableOverride(defaultObj, overrides);
}