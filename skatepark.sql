--
-- PostgreSQL database dump
--

-- Dumped from database version 16.4
-- Dumped by pg_dump version 16.4

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

--
-- Name: pgcrypto; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS pgcrypto WITH SCHEMA public;


--
-- Name: EXTENSION pgcrypto; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION pgcrypto IS 'cryptographic functions';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: skaters; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.skaters (
    id integer NOT NULL,
    email character varying(50) NOT NULL,
    nombre character varying(25) NOT NULL,
    password text NOT NULL,
    anos_experiencia integer NOT NULL,
    especialidad character varying(50) NOT NULL,
    foto character varying(255) NOT NULL,
    estado boolean NOT NULL,
    rol character varying(25) DEFAULT 'Usuario'::character varying NOT NULL
);


ALTER TABLE public.skaters OWNER TO postgres;

--
-- Name: skaters_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.skaters_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.skaters_id_seq OWNER TO postgres;

--
-- Name: skaters_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.skaters_id_seq OWNED BY public.skaters.id;


--
-- Name: skaters id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.skaters ALTER COLUMN id SET DEFAULT nextval('public.skaters_id_seq'::regclass);


--
-- Data for Name: skaters; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.skaters (id, email, nombre, password, anos_experiencia, especialidad, foto, estado, rol) FROM stdin;
1	admin@example.com	Admin User	$2a$06$FrF9T57xTTzwi6D9Mt5QcekIizaxETK646311kLtQg8t9yl6B02Xi	10	Manager	admin_photo_url	t	Administrador
2	admin@gmail.com	Admin User	securepassword	10	Manager	admin_photo_url	t	Administrador
5	qwee@m.com	Pedro	$2b$10$Z46oWwG/0pNU7v6l6j9ppOHw5nrafM9fPJ3oSdrK2DhBKXdDw7T4W	6	Kickflip	tony.jpg	t	Usuario
4	a@m.com	Eveline	$2b$10$nFge1VfaWXX.2Xod2KJ0SuswHnZa6/0L0/s8VLyn84DqI1tVdtGS2	9	roller	Evelien.jpg	f	Usuario
7	admin25@gmail.com	AdminUser25	$2a$06$gvD5v1PWbBLx9j/x7KBCae.g/0Oesj5Anckn9sM4RkKlk3KcH/zh.	10	Manager	admin_photo_url	t	Administrador
\.


--
-- Name: skaters_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.skaters_id_seq', 8, true);


--
-- Name: skaters skaters_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.skaters
    ADD CONSTRAINT skaters_email_key UNIQUE (email);


--
-- Name: skaters skaters_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.skaters
    ADD CONSTRAINT skaters_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

