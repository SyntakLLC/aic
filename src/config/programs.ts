export type Program = {
    title: string;
    day: string;
    time: string;
    description: string;
    category: "lecture" | "community" | "education";
    icon: "book" | "users" | "clock" | "microphone";
};

export const displayDays = [
    // "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    // "Saturday",
] as const;

export type DayOfWeek = (typeof displayDays)[number];

export const weeklyPrograms: Program[] = [
    {
        title: "Fiqh Lectures",
        day: "Tuesday",
        time: "After Isha",
        description:
            "Join us for in-depth discussions on Islamic jurisprudence (Fiqh). Learn about the practical application of Islamic law in daily life, from worship to transactions.",
        category: "lecture",
        icon: "book",
    },
    {
        title: "Seerah Lectures",
        day: "Wednesday",
        time: "After Isha",
        description:
            "Explore the life and teachings of Prophet Muhammad ﷺ. These sessions help us understand the Prophet's character, actions, and guidance for humanity.",
        category: "lecture",
        icon: "microphone",
    },
    {
        title: "Imam's Office Hours",
        day: "Wednesday",
        time: "4:00 PM - 6:00 PM",
        description:
            "Meet with our Imam for personal consultations, questions about Islam, or guidance on religious matters. Open to all community members.",
        category: "community",
        icon: "users",
    },
    {
        title: "Friday Night Halaqa",
        day: "Friday",
        time: "After Isha",
        description:
            "Weekly religious discussion circles covering various Islamic topics. A great opportunity to learn, discuss, and grow in your faith with fellow community members.",
        category: "education",
        icon: "clock",
    },
];

export const programCategories = {
    lecture: {
        title: "Islamic Lectures",
        description: "Structured learning sessions on various aspects of Islam",
    },
    community: {
        title: "Community Services",
        description: "Programs designed to serve and unite our community",
    },
    education: {
        title: "Educational Programs",
        description: "Interactive learning opportunities for all age groups",
    },
};
