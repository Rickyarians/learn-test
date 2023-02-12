import { CardICon, KeyIcon, LogOut, PDFblue } from "app/assets/icon";

export const menusetting = [
    {
        type: "DOKUMEN_SAYA",
        title: "Dokumen Saya",
        data : [
            {
                icon: CardICon,
                title: "Kartu Identitas",
                navigation: "DokumenSaya",
                type: "nav",
                bgcolor: '#D2DBF9'
            },
            {
                icon: PDFblue,
                title: "Dokumen Kepemilikan Kendaraan",
                navigation: "DokumenKendaraanSaya",
                type: "nav",
                bgcolor: "#D2DBF9"
            },
        ]
    },
    {
        type: "PENGATURAN_AKUN",
        title: "Pengaturan Akun",
        data : [
            {
                icon: KeyIcon,
                title: "Ganti PIN",
                navigation: "PinChange",
                type: "nav",
                bgcolor: "#FBD3D0"
            },
        ]
    },
    {
        type: "INFORMASI_UMUM",
        title: "Informasi Umum",
        data : [
            {
                icon: PDFblue,
                title: "Versi app",
                description: '5.7.5 (Beta)',
                type: "info",
                navigation: ""
            },
        ]
    },
    {
        type: "BUTTON",
        title: "Informasi Umum",
        data : [
            {
                icon: LogOut,
                title: "Log Out",
                description: '1.0',
                type: "info",
                navigation: "Logout"
            },
        ]
    }
]