import { projectCardPanigateType, projectCardType } from "@/types";

const projectCardData = [
  {
    appId: 1,
    title: "WhatsApp Messenger",
    developer: "WhatsApp LLC",
    src: "https://play-lh.googleusercontent.com/bYtqbOcTYOlgc6gqZ2rwb8lptHuwlNE75zYJu6Bn076-hTmvd96HH-6v7S0YUAAJXoJN=w480-h960-rw",
    teamMembers: [
      { src: "https://github.com/shadcn.png", alt: "@shadcn", fallback: "CN" },
      { src: "https://github.com/shadcn.png", alt: "@shadcn", fallback: "CN" },
      { src: "https://github.com/shadcn.png", alt: "@shadcn", fallback: "CN" },
      { src: "https://github.com/shadcn.png", alt: "@shadcn", fallback: "CN" },
      { src: "https://github.com/shadcn.png", alt: "@shadcn", fallback: "CN" },
      { src: "https://github.com/shadcn.png", alt: "@shadcn", fallback: "CN" },
      { src: "https://github.com/shadcn.png", alt: "@shadcn", fallback: "CN" },
      { src: "https://github.com/shadcn.png", alt: "@shadcn", fallback: "CN" },
    ],
  },
  {
    appId: 2,
    title: "Google Translate",
    developer: "Google LLC",
    src: "https://lh3.googleusercontent.com/ZrNeuKthBirZN7rrXPN1JmUbaG8ICy3kZSHt-WgSnREsJzo2txzCzjIoChlevMIQEA",
    teamMembers: [
      { src: "https://github.com/shadcn.png", alt: "@shadcn", fallback: "CN" },
      { src: "https://github.com/shadcn.png", alt: "@shadcn", fallback: "CN" },
      { src: "https://github.com/shadcn.png", alt: "@shadcn", fallback: "CN" },
    ],
  },
  {
    appId: 3,
    title: "Facebook",
    developer: "Meta Platforms, Inc.",
    src: "https://play-lh.googleusercontent.com/KCMTYuiTrKom4Vyf0G4foetVOwhKWzNbHWumV73IXexAIy5TTgZipL52WTt8ICL-oIo",
    teamMembers: [
      { src: "https://github.com/shadcn.png", alt: "@shadcn", fallback: "CN" },
      { src: "https://github.com/shadcn.png", alt: "@shadcn", fallback: "CN" },
      { src: "https://github.com/shadcn.png", alt: "@shadcn", fallback: "CN" },
    ],
  },
  {
    appId: 4,
    title: "Facebook",
    developer: "Meta Platforms, Inc.",
    src: "https://play-lh.googleusercontent.com/KCMTYuiTrKom4Vyf0G4foetVOwhKWzNbHWumV73IXexAIy5TTgZipL52WTt8ICL-oIo",
    teamMembers: [
      { src: "https://github.com/shadcn.png", alt: "@shadcn", fallback: "CN" },
      { src: "https://github.com/shadcn.png", alt: "@shadcn", fallback: "CN" },
      { src: "https://github.com/shadcn.png", alt: "@shadcn", fallback: "CN" },
    ],
  },
  {
    appId: 5,
    title: "Facebook",
    developer: "Meta Platforms, Inc.",
    src: "https://play-lh.googleusercontent.com/KCMTYuiTrKom4Vyf0G4foetVOwhKWzNbHWumV73IXexAIy5TTgZipL52WTt8ICL-oIo",
    teamMembers: [
      { src: "https://github.com/shadcn.png", alt: "@shadcn", fallback: "CN" },
      { src: "https://github.com/shadcn.png", alt: "@shadcn", fallback: "CN" },
      { src: "https://github.com/shadcn.png", alt: "@shadcn", fallback: "CN" },
    ],
  },
  {
    appId: 6,
    title: "Facebook",
    developer: "Meta Platforms, Inc.",
    src: "https://play-lh.googleusercontent.com/KCMTYuiTrKom4Vyf0G4foetVOwhKWzNbHWumV73IXexAIy5TTgZipL52WTt8ICL-oIo",
    teamMembers: [
      { src: "https://github.com/shadcn.png", alt: "@shadcn", fallback: "CN" },
      { src: "https://github.com/shadcn.png", alt: "@shadcn", fallback: "CN" },
      { src: "https://github.com/shadcn.png", alt: "@shadcn", fallback: "CN" },
    ],
  },
  {
    appId: 7,
    title: "Facebook",
    developer: "Meta Platforms, Inc.",
    src: "https://play-lh.googleusercontent.com/KCMTYuiTrKom4Vyf0G4foetVOwhKWzNbHWumV73IXexAIy5TTgZipL52WTt8ICL-oIo",
    teamMembers: [
      { src: "https://github.com/shadcn.png", alt: "@shadcn", fallback: "CN" },
      { src: "https://github.com/shadcn.png", alt: "@shadcn", fallback: "CN" },
      { src: "https://github.com/shadcn.png", alt: "@shadcn", fallback: "CN" },
    ],
  },
  {
    appId: 8,
    title: "Facebook",
    developer: "Meta Platforms, Inc.",
    src: "https://play-lh.googleusercontent.com/KCMTYuiTrKom4Vyf0G4foetVOwhKWzNbHWumV73IXexAIy5TTgZipL52WTt8ICL-oIo",
    teamMembers: [
      { src: "https://github.com/shadcn.png", alt: "@shadcn", fallback: "CN" },
      { src: "https://github.com/shadcn.png", alt: "@shadcn", fallback: "CN" },
      { src: "https://github.com/shadcn.png", alt: "@shadcn", fallback: "CN" },
    ],
  },
  {
    appId: 9,
    title: "Facebook",
    developer: "Meta Platforms, Inc.",
    src: "https://play-lh.googleusercontent.com/KCMTYuiTrKom4Vyf0G4foetVOwhKWzNbHWumV73IXexAIy5TTgZipL52WTt8ICL-oIo",
    teamMembers: [
      { src: "https://github.com/shadcn.png", alt: "@shadcn", fallback: "CN" },
      { src: "https://github.com/shadcn.png", alt: "@shadcn", fallback: "CN" },
      { src: "https://github.com/shadcn.png", alt: "@shadcn", fallback: "CN" },
    ],
  },
  {
    appId: 10,
    title: "Facebook",
    developer: "Meta Platforms, Inc.",
    src: "https://play-lh.googleusercontent.com/KCMTYuiTrKom4Vyf0G4foetVOwhKWzNbHWumV73IXexAIy5TTgZipL52WTt8ICL-oIo",
    teamMembers: [
      { src: "https://github.com/shadcn.png", alt: "@shadcn", fallback: "CN" },
      { src: "https://github.com/shadcn.png", alt: "@shadcn", fallback: "CN" },
      { src: "https://github.com/shadcn.png", alt: "@shadcn", fallback: "CN" },
    ],
  },
  {
    appId: 11,
    title: "Facebook",
    developer: "Meta Platforms, Inc.",
    src: "https://play-lh.googleusercontent.com/KCMTYuiTrKom4Vyf0G4foetVOwhKWzNbHWumV73IXexAIy5TTgZipL52WTt8ICL-oIo",
    teamMembers: [
      { src: "https://github.com/shadcn.png", alt: "@shadcn", fallback: "CN" },
      { src: "https://github.com/shadcn.png", alt: "@shadcn", fallback: "CN" },
      { src: "https://github.com/shadcn.png", alt: "@shadcn", fallback: "CN" },
    ],
  },
  {
    appId: 12,
    title: "Facebook",
    developer: "Meta Platforms, Inc.",
    src: "https://play-lh.googleusercontent.com/KCMTYuiTrKom4Vyf0G4foetVOwhKWzNbHWumV73IXexAIy5TTgZipL52WTt8ICL-oIo",
    teamMembers: [
      { src: "https://github.com/shadcn.png", alt: "@shadcn", fallback: "CN" },
      { src: "https://github.com/shadcn.png", alt: "@shadcn", fallback: "CN" },
      { src: "https://github.com/shadcn.png", alt: "@shadcn", fallback: "CN" },
    ],
  },
  {
    appId: 13,
    title: "Facebook",
    developer: "Meta Platforms, Inc.",
    src: "https://play-lh.googleusercontent.com/KCMTYuiTrKom4Vyf0G4foetVOwhKWzNbHWumV73IXexAIy5TTgZipL52WTt8ICL-oIo",
    teamMembers: [
      { src: "https://github.com/shadcn.png", alt: "@shadcn", fallback: "CN" },
      { src: "https://github.com/shadcn.png", alt: "@shadcn", fallback: "CN" },
      { src: "https://github.com/shadcn.png", alt: "@shadcn", fallback: "CN" },
    ],
  },
];

export function projectCardPanigate(
  page: number,
  searchQuery?: string
): projectCardPanigateType {
  const itemsPerPage = 8;

  let filteredData: projectCardType[] = projectCardData;
  if (searchQuery) {
    filteredData = projectCardData.filter(
      (item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.developer.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }
  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const currentPage = page > totalPages ? totalPages : page < 1 ? 1 : page;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedItems = filteredData.slice(startIndex, endIndex);

  return {
    totalItems,
    totalPages,
    currentPage,
    items: paginatedItems,
  };
}
