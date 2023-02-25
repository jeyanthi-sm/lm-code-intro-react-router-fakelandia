export const MISDEMEANOURS = [
	'rudeness',
	'vegetables',
	'lift',
	'united',
] as const;
export type MisdemeanourKind = (typeof MISDEMEANOURS)[number];
export const JUST_TALK = 'just-talk';
export const ALL = 'ALL';

export const ALLCONTACTREASONS  = [...MISDEMEANOURS, JUST_TALK] as const;

export const ALLMISDEMEANOURS  = [...MISDEMEANOURS, ALL] as const;

export type JustTalk = typeof JUST_TALK;

export type Misdemeanour = {
	citizenId: number;
	misdemeanour: MisdemeanourKind;
	date: string; // we'll stringify this for easy sending via HTTP rather than storing the full Date object
};

export type FormData = {
    subject:string;
    reason:string;
    details:string;
}


