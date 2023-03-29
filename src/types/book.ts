export type BookProps = {
  issueYear: string | null;
  rating: number | null;
  title: string;
  authors: string[] | null;
  image: {
    url: string | null;
  } | null;
  categories: string[] | null;
  id: number;
  booking: {
    id: number;
    order: boolean;
    dateOrder: string | null;
    customerId: number | null;
    customerFirstName: string | null;
    customerLastName: string | null;
  } | null;
  delivery: {
    id: number;
    handed: boolean;
    dateHandedFrom: string | null;
    dateHandedTo: string | null;
    recipientId: number | null;
    recipientFirstName: string | null;
    recipientLastName: string | null;
  } | null;
  histories:
    | [
        {
          id: number | null;
          userId: number | null;
        }
      ]
    | null;
};

export type CommentProps = {
  text: string;
  createdAt: string;
  rating: number;
  id: number;
  user: {
    commentUserId: number;
    firstName: string;
    lastName: string;
    avatarUrl: string;
  };
};

export type BookDetailedProps = {
  id: number;
  title: string;
  rating: number;
  issueYear: string;
  description: string;
  publish: string;
  pages: string;
  cover: string;
  weight: string;
  format: string;
  ISBN: string;
  producer: string;
  authors: string[];
  images: [
    {
      url: string;
    }
  ];
  categories: string[];
  comments: CommentProps[];
  booking: {
    id: number;
    order: boolean;
    dateOrder: string;
    customerId: number;
    customerFirstName: string;
    customerLastName: string;
  };
  delivery: {
    id: number;
    handed: boolean;
    dateHandedFrom: string;
    dateHandedTo: string;
    recipientId: number;
    recipientFirstName: string;
    recipientLastName: string;
  };
  histories: [
    {
      id: number;
      userId: number;
    }
  ];
};

export type IBookProps = {
  issueYear: string;
  rating: number;
  title: string;
  authors: string[];
  image: {
    url: string;
  };
  categories: string[];
  id: number;
  booking: {
    id: number;
    order: boolean;
    dateOrder: string;
    customerId: number;
  };
  delivery: {
    id: number;
    handed: boolean;
    dateHandedFrom: string;
    dateHandedTo: string;
    recipientId: number;
  };
  histories: [
    {
      id: number;
      userId: number;
    }
  ];
};
