import { ImageSourcePropType } from 'react-native';

type imageType = ImageSourcePropType;

interface ImageAuth {
  splash_screen: imageType;
}

interface ImageOnboarding {
  driver: imageType;
}

interface ImageMainMenu {
  header: imageType;
  atas: imageType;
  bawah: imageType;
  bgpolri: imageType;
  banneretiket: imageType;
  bannertitipsidang: imageType,
  bannerpembayaranbriva: imageType,
  bannerblankobiru: imageType,
  bannerblankomerah: imageType
}

interface ImageGlobal {
  logo: imageType;
}

export interface Images {
  /*
   * for this will return only images in auth modules and pages
   */
  auth: ImageAuth;
  onboarding: ImageOnboarding;
  banner: ImageMainMenu;
  global: ImageGlobal;
  defaultpp: imageType;
}
