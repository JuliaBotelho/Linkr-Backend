--
-- PostgreSQL database dump
--

-- Dumped from database version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: comments; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.comments (
    id integer NOT NULL,
    "postId" integer NOT NULL,
    "userId" integer NOT NULL,
    comment text,
    "createdAt" date DEFAULT now() NOT NULL
);


--
-- Name: comments_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.comments_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: comments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.comments_id_seq OWNED BY public.comments.id;


--
-- Name: followers; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.followers (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    "followId" integer NOT NULL,
    "createdAt" date DEFAULT now() NOT NULL
);


--
-- Name: followers_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.followers_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: followers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.followers_id_seq OWNED BY public.followers.id;


--
-- Name: hashtags; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.hashtags (
    id integer NOT NULL,
    "postId" integer NOT NULL,
    hashtag text,
    counter integer DEFAULT 1 NOT NULL,
    "createdAt" date DEFAULT now() NOT NULL
);


--
-- Name: hashtags_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.hashtags_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: hashtags_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.hashtags_id_seq OWNED BY public.hashtags.id;


--
-- Name: likes; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.likes (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    "postId" integer NOT NULL,
    "createdAt" date DEFAULT now() NOT NULL
);


--
-- Name: likes_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.likes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: likes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.likes_id_seq OWNED BY public.likes.id;


--
-- Name: posts; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.posts (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    description text,
    link text NOT NULL,
    title text,
    preview text,
    pic text,
    hashtag text,
    isrepost boolean,
    reposter text,
    "originalPostId" integer,
    "repostCount" integer DEFAULT 0,
    "createdAt" date DEFAULT now() NOT NULL
);


--
-- Name: posts_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.posts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: posts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.posts_id_seq OWNED BY public.posts.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    "userName" character varying(50) NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    picture text NOT NULL,
    token text,
    "createdAt" date DEFAULT now() NOT NULL
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: comments id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.comments ALTER COLUMN id SET DEFAULT nextval('public.comments_id_seq'::regclass);


--
-- Name: followers id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.followers ALTER COLUMN id SET DEFAULT nextval('public.followers_id_seq'::regclass);


--
-- Name: hashtags id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.hashtags ALTER COLUMN id SET DEFAULT nextval('public.hashtags_id_seq'::regclass);


--
-- Name: likes id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.likes ALTER COLUMN id SET DEFAULT nextval('public.likes_id_seq'::regclass);


--
-- Name: posts id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.posts ALTER COLUMN id SET DEFAULT nextval('public.posts_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: comments; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.comments VALUES (1, 818, 1, 'oiee', '2023-01-13');
INSERT INTO public.comments VALUES (2, 818, 1, 'oiee', '2023-01-13');
INSERT INTO public.comments VALUES (3, 818, 1, 'oiee', '2023-01-13');
INSERT INTO public.comments VALUES (4, 818, 1, 'oiee', '2023-01-13');
INSERT INTO public.comments VALUES (5, 818, 1, 'oiee', '2023-01-13');
INSERT INTO public.comments VALUES (6, 818, 1, 'oiee', '2023-01-13');


--
-- Data for Name: followers; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: hashtags; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: likes; Type: TABLE DATA; Schema: public; Owner: -
--



--
-- Data for Name: posts; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.posts VALUES (817, 1, 'uhul que artigo mt incrivel', 'https://revistacasaejardim.globo.com/', 'Casa e Jardim | Sua casa linda do seu jeito', 'Casa e Jardim | Home', 'https://s2.glbimg.com/ey6x3JtlPmztxzJyJsMLWTf0wx4=/192x192/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_a0b7e59562ef42049f4e191fe476fe7d/internal_photos/bs/2022/o/j/XHnuv9QCmbeWdbs0iRJg/casaejardim-favicon.ico', NULL, true, 'pipo', 816, 1, '2023-01-13');
INSERT INTO public.posts VALUES (816, 1, 'uhul que artigo mt incrivel legalll', 'https://revistacasaejardim.globo.com/', 'Casa e Jardim | Sua casa linda do seu jeito', 'Casa e Jardim | Home', 'https://s2.glbimg.com/ey6x3JtlPmztxzJyJsMLWTf0wx4=/192x192/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_a0b7e59562ef42049f4e191fe476fe7d/internal_photos/bs/2022/o/j/XHnuv9QCmbeWdbs0iRJg/casaejardim-favicon.ico', NULL, NULL, NULL, NULL, 1, '2023-01-13');
INSERT INTO public.posts VALUES (818, 1, 'uhulllll', 'https://revistacasaejardim.globo.com/', 'Casa e Jardim | Sua casa linda do seu jeito', 'Casa e Jardim | Home', 'https://s2.glbimg.com/ey6x3JtlPmztxzJyJsMLWTf0wx4=/192x192/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_a0b7e59562ef42049f4e191fe476fe7d/internal_photos/bs/2022/o/j/XHnuv9QCmbeWdbs0iRJg/casaejardim-favicon.ico', NULL, NULL, NULL, NULL, 0, '2023-01-13');


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (1, 'pipo', 'pipo@email.com', '$2b$10$GVd1Fb5FjKbdPIehbgVbGul6uoTMkJkrlbU1/K1KiVHZLdDVoHV2i', 'https://almeidajunior-prod1.s3.amazonaws.com/prod/uploads/news/5d81505ac6770.jpg', '8e0356f9-f2bb-4cd1-b45a-d887f6f99b50', '2023-01-12');


--
-- Name: comments_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.comments_id_seq', 6, true);


--
-- Name: followers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.followers_id_seq', 1, false);


--
-- Name: hashtags_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.hashtags_id_seq', 1, false);


--
-- Name: likes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.likes_id_seq', 1, false);


--
-- Name: posts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.posts_id_seq', 818, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 1, true);


--
-- Name: comments comments_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.comments
    ADD CONSTRAINT comments_pkey PRIMARY KEY (id);


--
-- Name: followers followers_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.followers
    ADD CONSTRAINT followers_pkey PRIMARY KEY (id);


--
-- Name: hashtags hashtags_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.hashtags
    ADD CONSTRAINT hashtags_pkey PRIMARY KEY (id);


--
-- Name: likes likes_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.likes
    ADD CONSTRAINT likes_pkey PRIMARY KEY (id);


--
-- Name: posts posts_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: comments comments_postId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.comments
    ADD CONSTRAINT "comments_postId_fkey" FOREIGN KEY ("postId") REFERENCES public.posts(id);


--
-- Name: comments comments_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.comments
    ADD CONSTRAINT "comments_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: followers followers_followId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.followers
    ADD CONSTRAINT "followers_followId_fkey" FOREIGN KEY ("followId") REFERENCES public.users(id);


--
-- Name: followers followers_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.followers
    ADD CONSTRAINT "followers_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: hashtags hashtags_postId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.hashtags
    ADD CONSTRAINT "hashtags_postId_fkey" FOREIGN KEY ("postId") REFERENCES public.posts(id);


--
-- Name: likes likes_postId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.likes
    ADD CONSTRAINT "likes_postId_fkey" FOREIGN KEY ("postId") REFERENCES public.posts(id);


--
-- Name: likes likes_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.likes
    ADD CONSTRAINT "likes_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: posts posts_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.posts
    ADD CONSTRAINT "posts_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

