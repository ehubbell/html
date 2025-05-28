import { LibType, RHP } from 'types';
import { classBuilder } from 'utils';

export const A = ({ name = 'A', tailwind, className, ...props }: RHP.AProps & LibType) => {
	const base = {};
	const classes = classBuilder({ ...base, ...tailwind, className });
	return <a data-name={name} className={classes} {...props} />;
};

export const Abbr = ({ name = 'Abbr', tailwind, className, ...props }: RHP.AbbrProps & LibType) => {
	const base = {};
	const classes = classBuilder({ ...base, ...tailwind, className });
	return <abbr data-name={name} className={classes} {...props} />;
};

export const Address = ({ name = 'Address', tailwind, className, ...props }: RHP.AddressProps & LibType) => {
	const base = {};
	const classes = classBuilder({ ...base, ...tailwind, className });
	return <address data-name={name} className={classes} {...props} />;
};

export const Area = ({ name = 'Area', tailwind, className, ...props }: RHP.AreaProps & LibType) => {
	const base = {};
	const classes = classBuilder({ ...base, ...tailwind, className });
	return <area data-name={name} className={classes} {...props} />;
};

export const Article = ({ name = 'Article', tailwind, className, ...props }: RHP.ArticleProps & LibType) => {
	const base = {};
	const classes = classBuilder({ ...base, ...tailwind, className });
	return <article data-name={name} className={classes} {...props} />;
};

export const Aside = ({ name = 'Aside', tailwind, className, ...props }: RHP.AsideProps & LibType) => {
	const base = {};
	const classes = classBuilder({ ...base, ...tailwind, className });
	return <aside data-name={name} className={classes} {...props} />;
};

export const Audio = ({ name = 'Audio', tailwind, className, ...props }: RHP.AudioProps & LibType) => {
	const base = {};
	const classes = classBuilder({ ...base, ...tailwind, className });
	return <audio data-name={name} className={classes} {...props} />;
};

export const B = ({ name = 'B', tailwind, className, ...props }: RHP.BProps & LibType) => {
	const base = {};
	const classes = classBuilder({ ...base, ...tailwind, className });
	return <b data-name={name} className={classes} {...props} />;
};

export const Base = ({ name = 'Base', tailwind, className, ...props }: RHP.BaseProps & LibType) => {
	const base = {};
	const classes = classBuilder({ ...base, ...tailwind, className });
	return <base data-name={name} className={classes} {...props} />;
};

export const Bdi = ({ name = 'Bdi', tailwind, className, ...props }: RHP.BDIProps & LibType) => {
	const base = {};
	const classes = classBuilder({ ...base, ...tailwind, className });
	return <bdi data-name={name} className={classes} {...props} />;
};

export const Bdo = ({ name = 'Bdo', tailwind, className, ...props }: RHP.BDOProps & LibType) => {
	const base = {};
	const classes = classBuilder({ ...base, ...tailwind, className });
	return <bdo data-name={name} className={classes} {...props} />;
};

export const Blockquote = ({ name = 'Blockquote', tailwind, className, ...props }: RHP.BlockQuoteProps & LibType) => {
	const base = {};
	const classes = classBuilder({ ...base, ...tailwind, className });
	return <blockquote data-name={name} className={classes} {...props} />;
};

export const Body = ({ name = 'Body', tailwind, className, ...props }: RHP.BodyProps & LibType) => {
	const base = {};
	const classes = classBuilder({ ...base, ...tailwind, className });
	return <body data-name={name} className={classes} {...props} />;
};

export const Br = ({ name = 'Br', tailwind, className, ...props }: RHP.BRProps & LibType) => {
	const base = {};
	const classes = classBuilder({ ...base, ...tailwind, className });
	return <br data-name={name} className={classes} {...props} />;
};

export const Button = ({ name = 'Button', tailwind, className, ...props }: RHP.ButtonProps & LibType) => {
	const base = {};
	const classes = classBuilder({ ...base, ...tailwind, className });
	return <button data-name={name} className={classes} {...props} />;
};

export const Canvas = ({ name = 'Canvas', tailwind, className, ...props }: RHP.CanvasProps & LibType) => {
	const base = {};
	const classes = classBuilder({ ...base, ...tailwind, className });
	return <canvas data-name={name} className={classes} {...props} />;
};

export const Caption = ({ name = 'Caption', tailwind, className, ...props }: RHP.CaptionProps & LibType) => {
	const base = {};
	const classes = classBuilder({ ...base, ...tailwind, className });
	return <caption data-name={name} className={classes} {...props} />;
};

export const Cite = ({ name = 'Cite', tailwind, className, ...props }: RHP.CiteProps & LibType) => {
	const base = {};
	const classes = classBuilder({ ...base, ...tailwind, className });
	return <cite data-name={name} className={classes} {...props} />;
};

export const Code = ({ name = 'Code', tailwind, className, ...props }: RHP.CodeProps & LibType) => {
	const base = {};
	const classes = classBuilder({ ...base, ...tailwind, className });
	return <code data-name={name} className={classes} {...props} />;
};

export const Data = ({ name = 'Data', tailwind, className, ...props }: RHP.DataProps & LibType) => {
	const base = {};
	const classes = classBuilder({ ...base, ...tailwind, className });
	return <data data-name={name} className={classes} {...props} />;
};

export const DataList = ({ name = 'DataList', tailwind, className, ...props }: RHP.DataListProps & LibType) => {
	const base = {};
	const classes = classBuilder({ ...base, ...tailwind, className });
	return <datalist data-name={name} className={classes} {...props} />;
};

export const DD = ({ name = 'DD', tailwind, className, ...props }: RHP.DDProps & LibType) => {
	const base = {};
	const classes = classBuilder({ ...base, ...tailwind, className });
	return <dd data-name={name} className={classes} {...props} />;
};

export const Del = ({ name = 'Del', tailwind, className, ...props }: RHP.DelProps & LibType) => {
	const base = {};
	const classes = classBuilder({ ...base, ...tailwind, className });
	return <del data-name={name} className={classes} {...props} />;
};

export const Details = ({ name = 'Details', tailwind, className, ...props }: RHP.DetailsProps & LibType) => {
	const base = {};
	const classes = classBuilder({ ...base, ...tailwind, className });
	// @ts-expect-error unsure
	return <details data-name={name} className={classes} {...props} />;
};

export const Dfn = ({ name = 'Dfn', tailwind, className, ...props }: RHP.DfnProps & LibType) => {
	const base = {};
	const classes = classBuilder({ ...base, ...tailwind, className });
	return <dfn data-name={name} className={classes} {...props} />;
};

export const Dialog = ({ name = 'Dialog', tailwind, className, ...props }: RHP.DialogProps & LibType) => {
	const base = {};
	const classes = classBuilder({ ...base, ...tailwind, className });
	return <dialog data-name={name} className={classes} {...props} />;
};

export const Div = ({ name = 'Div', tailwind, className, ...props }: RHP.DivProps & LibType) => {
	const base = {};
	const classes = classBuilder({ ...base, ...tailwind, className });
	return <div data-name={name} className={classes} {...props} />;
};

export const Dl = ({ name = 'Dl', tailwind, className, ...props }: RHP.DLProps & LibType) => {
	const base = {};
	const classes = classBuilder({ ...base, ...tailwind, className });
	return <dl data-name={name} className={classes} {...props} />;
};

export const Dt = ({ name = 'Dt', tailwind, className, ...props }: RHP.DTProps & LibType) => {
	const base = {};
	const classes = classBuilder({ ...base, ...tailwind, className });
	return <dt data-name={name} className={classes} {...props} />;
};

export const Em = ({ name = 'Em', tailwind, className, ...props }: RHP.EmProps & LibType) => {
	const base = {};
	const classes = classBuilder({ ...base, ...tailwind, className });
	return <em data-name={name} className={classes} {...props} />;
};

export const Embed = ({ name = 'Embed', tailwind, className, ...props }: RHP.EmbedProps & LibType) => {
	const base = {};
	const classes = classBuilder({ ...base, ...tailwind, className });
	return <embed data-name={name} className={classes} {...props} />;
};

// TODO

export const Figure = ({ name = 'Figure', tailwind, className, ...props }: RHP.FigureProps & LibType) => {
	const base = {};
	const classes = classBuilder({ ...base, ...tailwind, className });
	return <figure data-name={name} className={classes} {...props} />;
};

export const Footer = ({ name = 'Footer', tailwind, className, ...props }: RHP.FooterProps & LibType) => {
	const base = {};
	const classes = classBuilder({ ...base, ...tailwind, className });
	return <footer data-name={name} className={classes} {...props} />;
};

export const H1 = ({ name = 'H1', tailwind, className, ...props }: RHP.HeadingProps & LibType) => {
	const base = {};
	const classes = classBuilder({ ...base, ...tailwind, className });
	return <h1 data-name={name} className={classes} {...props} />;
};

export const H2 = ({ name = 'H2', tailwind, className, ...props }: RHP.HeadingProps & LibType) => {
	const base = {};
	const classes = classBuilder({ ...base, ...tailwind, className });
	return <h2 data-name={name} className={classes} {...props} />;
};

export const H3 = ({ name = 'H3', tailwind, className, ...props }: RHP.HeadingProps & LibType) => {
	const base = {};
	const classes = classBuilder({ ...base, ...tailwind, className });
	return <h3 data-name={name} className={classes} {...props} />;
};

export const H4 = ({ name = 'H4', tailwind, className, ...props }: RHP.HeadingProps & LibType) => {
	const base = {};
	const classes = classBuilder({ ...base, ...tailwind, className });
	return <h4 data-name={name} className={classes} {...props} />;
};

export const H5 = ({ name = 'H5', tailwind, className, ...props }: RHP.HeadingProps & LibType) => {
	const base = {};
	const classes = classBuilder({ ...base, ...tailwind, className });
	return <h5 data-name={name} className={classes} {...props} />;
};

export const H6 = ({ name = 'H6', tailwind, className, ...props }: RHP.HeadingProps & LibType) => {
	const base = {};
	const classes = classBuilder({ ...base, ...tailwind, className });
	return <h6 data-name={name} className={classes} {...props} />;
};

export const Hr = ({ name = 'Hr', tailwind, className, ...props }: RHP.HRProps & LibType) => {
	const base = {};
	const classes = classBuilder({ ...base, ...tailwind, className });
	return <hr data-name={name} className={classes} {...props} />;
};

export const Html = ({ name = 'HTML', tailwind, className, ...props }: RHP.HtmlProps & LibType) => {
	const base = {};
	const classes = classBuilder({ ...base, ...tailwind, className });
	return <html data-name={name} className={classes} {...props} />;
};

export const Iframe = ({ name = 'Iframe', tailwind, className, ...props }: RHP.IFrameProps & LibType) => {
	const base = {};
	const classes = classBuilder({ ...base, ...tailwind, className });
	return <iframe data-name={name} className={classes} {...props} />;
};

export const Img = ({ name = 'Img', tailwind, className, ...props }: RHP.ImgProps & LibType) => {
	const base = {};
	const classes = classBuilder({ ...base, ...tailwind, className });
	return <img data-name={name} className={classes} {...props} />;
};

export const Li = ({ name = 'Li', tailwind, className, ...props }: RHP.LIProps & LibType) => {
	const base = {};
	const classes = classBuilder({ ...base, ...tailwind, className });
	return <li data-name={name} className={classes} {...props} />;
};

export const Main = ({ name = 'Main', tailwind, className, ...props }: RHP.MainProps & LibType) => {
	const base = {};
	const classes = classBuilder({ ...base, ...tailwind, className });
	return <main data-name={name} className={classes} {...props} />;
};

export const Nav = ({ name = 'Nav', tailwind, className, ...props }: RHP.NavProps & LibType) => {
	const base = {};
	const classes = classBuilder({ ...base, ...tailwind, className });
	return <nav data-name={name} className={classes} {...props} />;
};

export const P = ({ name = 'P', tailwind, className, ...props }: RHP.PProps & LibType) => {
	const base = {};
	const classes = classBuilder({ ...base, ...tailwind, className });
	return <p data-name={name} className={classes} {...props} />;
};

export const Pre = ({ name = 'Pre', tailwind, className, ...props }: RHP.PreProps & LibType) => {
	const base = {};
	const classes = classBuilder({ ...base, ...tailwind, className });
	return <pre data-name={name} className={classes} {...props} />;
};

export const Small = ({ name = 'Small', tailwind, className, ...props }: RHP.SmallProps & LibType) => {
	const base = {};
	const classes = classBuilder({ ...base, ...tailwind, className });
	return <small data-name={name} className={classes} {...props} />;
};

export const Span = ({ name = 'Span', tailwind, className, ...props }: RHP.SpanProps & LibType) => {
	const base = {};
	const classes = classBuilder({ ...base, ...tailwind, className });
	return <span data-name={name} className={classes} {...props} />;
};

export const Ul = ({ name = 'Ul', tailwind, className, ...props }: RHP.ULProps & LibType) => {
	const base = {};
	const classes = classBuilder({ ...base, ...tailwind, className });
	return <ul data-name={name} className={classes} {...props} />;
};
