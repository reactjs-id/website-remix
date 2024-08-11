export type Organizer = {
  image: string;
  fullName: string;
  role: string;
};

export type Mission = {
  title: string;
  description: string;
};

export type Offer = {
  title: string;
  description: string;
};

export const organizerData: Organizer[] = [
  {
    fullName: "Dzaki",
    role: "kontributor open source",
    image: "",
  },
  {
    fullName: "M Haidar Hanif",
    role: "kontributor open source",
    image: "",
  },
  {
    fullName: "Resi Respati",
    role: "kontributor open source",
    image: "",
  },
  {
    fullName: "muhfaridzia",
    role: "panelis open source",
    image: "",
  },
  {
    fullName: "Nara",
    role: "kontributor open source",
    image: "",
  },
  {
    fullName: "Yusuf",
    role: "kontributor open source",
    image: "",
  },
  {
    fullName: "Bambang",
    role: "kontributor open source",
    image: "",
  },
  {
    fullName: "Alif",
    role: "kontributor open source",
    image: "",
  },
  {
    fullName: "Gusti",
    role: "kontributor open source",
    image: "",
  },
];

export const missionData: Mission[] = [
  {
    title: "Membangun Komunitas yang Kuat",
    description:
      "Kami berkomitmen untuk menghubungkan developer dari seluruh Indonesia agar dapat berbagi pengetahuan dan pengalaman. Dengan mendorong kolaborasi dan saling mendukung dalam pengembangan proyek-proyek berbasis React, kami berharap dapat membangun komunitas yang solid dan saling mendukung.",
  },
  {
    title: "Peningkatan Keterampilan dan Wawasan",
    description:
      "Kami berkomitmen untuk menghubungkan developer dari seluruh Indonesia agar dapat berbagi pengetahuan dan pengalaman. Dengan mendorong kolaborasi dan saling mendukung dalam pengembangan proyek-proyek berbasis React, kami berharap dapat membangun komunitas yang solid dan saling mendukung.",
  },
  {
    title: "Membangun Komunitas yang Kuat",
    description:
      "Kami berkomitmen untuk menghubungkan developer dari seluruh Indonesia agar dapat berbagi pengetahuan dan pengalaman. Dengan mendorong kolaborasi dan saling mendukung dalam pengembangan proyek-proyek berbasis React, kami berharap dapat membangun komunitas yang solid dan saling mendukung.",
  },
];

export const offerData: Offer[] = [
  {
    title: "Meetup Bulanan",
    description:
      "Bertemu secara langsung dengan sesama developer, berdiskusi tentang topik terbaru, dan mendapatkan wawasan langsung dari para ahli.",
  },
  {
    title: "Workshop dan Talkshow",
    description:
      "Sesi pembelajaran intensif tentang berbagai topik, mulai dari dasar-dasar React hingga teknik pengembangan lanjutan.",
  },
  {
    title: "Hackathon",
    description:
      "Tantangan coding yang memacu kreativitas dan keterampilan, dengan peluang untuk berkolaborasi dan memenangkan hadiah menarik.",
  },
  {
    title: "Blog dan Materi",
    description:
      "Artikel, tutorial, dan video yang dibuat oleh anggota komunitas untuk membantu memperluas pengetahuan dan keterampilan.",
  },
];
