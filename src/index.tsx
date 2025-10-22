import { computeTwClassNames } from 'src/utils';
import { LibProps, RHP } from 'types';

export * from 'src/utils/functions';

export const A = ({ name = 'A', tailwind, className, ...props }: RHP.AProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <a data-name={name} className={classes} {...props} />;
};

export const Abbr = ({ name = 'Abbr', tailwind, className, ...props }: RHP.AbbrProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <abbr data-name={name} className={classes} {...props} />;
};

export const Address = ({ name = 'Address', tailwind, className, ...props }: RHP.AddressProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <address data-name={name} className={classes} {...props} />;
};

export const Area = ({ name = 'Area', tailwind, className, ...props }: RHP.AreaProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <area data-name={name} className={classes} {...props} />;
};

export const Article = ({ name = 'Article', tailwind, className, ...props }: RHP.ArticleProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <article data-name={name} className={classes} {...props} />;
};

export const Aside = ({ name = 'Aside', tailwind, className, ...props }: RHP.AsideProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <aside data-name={name} className={classes} {...props} />;
};

export const Audio = ({ name = 'Audio', tailwind, className, ...props }: RHP.AudioProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <audio data-name={name} className={classes} {...props} />;
};

export const B = ({ name = 'B', tailwind, className, ...props }: RHP.BProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <b data-name={name} className={classes} {...props} />;
};

export const Base = ({ name = 'Base', tailwind, className, ...props }: RHP.BaseProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <base data-name={name} className={classes} {...props} />;
};

export const Bdi = ({ name = 'Bdi', tailwind, className, ...props }: RHP.BDIProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <bdi data-name={name} className={classes} {...props} />;
};

export const Bdo = ({ name = 'Bdo', tailwind, className, ...props }: RHP.BDOProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <bdo data-name={name} className={classes} {...props} />;
};

export const Blockquote = ({ name = 'Blockquote', tailwind, className, ...props }: RHP.BlockQuoteProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <blockquote data-name={name} className={classes} {...props} />;
};

export const Body = ({ name = 'Body', tailwind, className, ...props }: RHP.BodyProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <body data-name={name} className={classes} {...props} />;
};

export const Br = ({ name = 'Br', tailwind, className, ...props }: RHP.BRProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <br data-name={name} className={classes} {...props} />;
};

export const Button = ({ name = 'Button', tailwind, className, ...props }: RHP.ButtonProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <button data-name={name} className={classes} {...props} />;
};

export const Canvas = ({ name = 'Canvas', tailwind, className, ...props }: RHP.CanvasProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <canvas data-name={name} className={classes} {...props} />;
};

export const Caption = ({ name = 'Caption', tailwind, className, ...props }: RHP.CaptionProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <caption data-name={name} className={classes} {...props} />;
};

export const Cite = ({ name = 'Cite', tailwind, className, ...props }: RHP.CiteProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <cite data-name={name} className={classes} {...props} />;
};

export const Code = ({ name = 'Code', tailwind, className, ...props }: RHP.CodeProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <code data-name={name} className={classes} {...props} />;
};

export const Data = ({ name = 'Data', tailwind, className, ...props }: RHP.DataProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <data data-name={name} className={classes} {...props} />;
};

export const DataList = ({ name = 'DataList', tailwind, className, ...props }: RHP.DataListProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <datalist data-name={name} className={classes} {...props} />;
};

export const DD = ({ name = 'DD', tailwind, className, ...props }: RHP.DDProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <dd data-name={name} className={classes} {...props} />;
};

export const Del = ({ name = 'Del', tailwind, className, ...props }: RHP.DelProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <del data-name={name} className={classes} {...props} />;
};

export const Details = ({ name = 'Details', tailwind, className, ...props }: RHP.DetailsProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	// @ts-expect-error unsure
	return <details data-name={name} className={classes} {...props} />;
};

export const Dfn = ({ name = 'Dfn', tailwind, className, ...props }: RHP.DfnProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <dfn data-name={name} className={classes} {...props} />;
};

export const Dialog = ({ name = 'Dialog', tailwind, className, ...props }: RHP.DialogProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <dialog data-name={name} className={classes} {...props} />;
};

export const Div = ({ name = 'Div', tailwind, className, ...props }: RHP.DivProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <div data-name={name} className={classes} {...props} />;
};

export const Dl = ({ name = 'Dl', tailwind, className, ...props }: RHP.DLProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <dl data-name={name} className={classes} {...props} />;
};

export const Dt = ({ name = 'Dt', tailwind, className, ...props }: RHP.DTProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <dt data-name={name} className={classes} {...props} />;
};

export const Em = ({ name = 'Em', tailwind, className, ...props }: RHP.EmProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <em data-name={name} className={classes} {...props} />;
};

export const Embed = ({ name = 'Embed', tailwind, className, ...props }: RHP.EmbedProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <embed data-name={name} className={classes} {...props} />;
};

export const FieldSet = ({ name = 'FieldSet', tailwind, className, ...props }: RHP.FieldSetProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <fieldset data-name={name} className={classes} {...props} />;
};

export const FigCaption = ({ name = 'FigCaption', tailwind, className, ...props }: RHP.FigCaptionProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <figcaption data-name={name} className={classes} {...props} />;
};

export const Form = ({ name = 'Form', tailwind, className, ...props }: RHP.FormProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <form data-name={name} className={classes} {...props} />;
};

export const Figure = ({ name = 'Figure', tailwind, className, ...props }: RHP.FigureProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <figure data-name={name} className={classes} {...props} />;
};

export const Footer = ({ name = 'Footer', tailwind, className, ...props }: RHP.FooterProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <footer data-name={name} className={classes} {...props} />;
};

export const H1 = ({ name = 'H1', tailwind, className, ...props }: RHP.HeadingProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <h1 data-name={name} className={classes} {...props} />;
};

export const H2 = ({ name = 'H2', tailwind, className, ...props }: RHP.HeadingProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <h2 data-name={name} className={classes} {...props} />;
};

export const H3 = ({ name = 'H3', tailwind, className, ...props }: RHP.HeadingProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <h3 data-name={name} className={classes} {...props} />;
};

export const H4 = ({ name = 'H4', tailwind, className, ...props }: RHP.HeadingProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <h4 data-name={name} className={classes} {...props} />;
};

export const H5 = ({ name = 'H5', tailwind, className, ...props }: RHP.HeadingProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <h5 data-name={name} className={classes} {...props} />;
};

export const H6 = ({ name = 'H6', tailwind, className, ...props }: RHP.HeadingProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <h6 data-name={name} className={classes} {...props} />;
};

export const Head = ({ name = 'Head', tailwind, className, ...props }: RHP.HeadProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <head data-name={name} className={classes} {...props} />;
};

export const Header = ({ name = 'Header', tailwind, className, ...props }: RHP.HeaderProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <header data-name={name} className={classes} {...props} />;
};

export const Hr = ({ name = 'Hr', tailwind, className, ...props }: RHP.HRProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <hr data-name={name} className={classes} {...props} />;
};

export const Html = ({ name = 'HTML', tailwind, className, ...props }: RHP.HtmlProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <html data-name={name} className={classes} {...props} />;
};

export const Iframe = ({ name = 'Iframe', tailwind, className, ...props }: RHP.IFrameProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <iframe data-name={name} className={classes} {...props} />;
};

export const Img = ({ name = 'Img', tailwind, className, ...props }: RHP.ImgProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <img data-name={name} className={classes} {...props} />;
};

export const Input = ({ name = 'Input', tailwind, className, ...props }: RHP.InputProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <input data-name={name} className={classes} {...props} />;
};

export const Ins = ({ name = 'Ins', tailwind, className, ...props }: RHP.InsProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <ins data-name={name} className={classes} {...props} />;
};

export const Kbd = ({ name = 'Kbd', tailwind, className, ...props }: RHP.KbdProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <kbd data-name={name} className={classes} {...props} />;
};

export const Label = ({ name = 'Label', tailwind, className, ...props }: RHP.LabelProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <label data-name={name} className={classes} {...props} />;
};

export const Legend = ({ name = 'Legend', tailwind, className, ...props }: RHP.LegendProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <legend data-name={name} className={classes} {...props} />;
};

export const Link = ({ name = 'Link', tailwind, className, ...props }: RHP.LinkProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <link data-name={name} className={classes} {...props} />;
};

export const Li = ({ name = 'Li', tailwind, className, ...props }: RHP.LIProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <li data-name={name} className={classes} {...props} />;
};

export const Main = ({ name = 'Main', tailwind, className, ...props }: RHP.MainProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <main data-name={name} className={classes} {...props} />;
};

export const Map = ({ name = 'Map', tailwind, className, ...props }: RHP.MapProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <map data-name={name} className={classes} {...props} />;
};

export const Mark = ({ name = 'Mark', tailwind, className, ...props }: RHP.MarkProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <mark data-name={name} className={classes} {...props} />;
};

export const Menu = ({ name = 'Menu', tailwind, className, ...props }: RHP.MenuProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <menu data-name={name} className={classes} {...props} />;
};

export const Meta = ({ name = 'Meta', tailwind, className, ...props }: RHP.MetaProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <meta data-name={name} className={classes} {...props} />;
};

export const Meter = ({ name = 'Meter', tailwind, className, ...props }: RHP.MeterProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <meter data-name={name} className={classes} {...props} />;
};

export const Nav = ({ name = 'Nav', tailwind, className, ...props }: RHP.NavProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <nav data-name={name} className={classes} {...props} />;
};

export const NoScript = ({ name = 'NoScript', tailwind, className, ...props }: RHP.NoScriptProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <noscript data-name={name} className={classes} {...props} />;
};

export const Object = ({ name = 'Object', tailwind, className, ...props }: RHP.ObjectProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <object data-name={name} className={classes} {...props} />;
};

export const Ol = ({ name = 'Ol', tailwind, className, ...props }: RHP.OLProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <ol data-name={name} className={classes} {...props} />;
};

export const OptGroup = ({ name = 'OptGroup', tailwind, className, ...props }: RHP.OptGroupProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <optgroup data-name={name} className={classes} {...props} />;
};

export const Option = ({ name = 'Option', tailwind, className, ...props }: RHP.OptionProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <option data-name={name} className={classes} {...props} />;
};

export const Output = ({ name = 'Output', tailwind, className, ...props }: RHP.OutputProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <output data-name={name} className={classes} {...props} />;
};

export const P = ({ name = 'P', tailwind, className, ...props }: RHP.PProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <p data-name={name} className={classes} {...props} />;
};

export const Pre = ({ name = 'Pre', tailwind, className, ...props }: RHP.PreProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <pre data-name={name} className={classes} {...props} />;
};

export const Param = ({ name = 'Param', tailwind, className, ...props }: RHP.ParamProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <param data-name={name} className={classes} {...props} />;
};

export const Picture = ({ name = 'Picture', tailwind, className, ...props }: RHP.PictureProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <picture data-name={name} className={classes} {...props} />;
};

export const Progress = ({ name = 'Progress', tailwind, className, ...props }: RHP.ProgressProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <progress data-name={name} className={classes} {...props} />;
};

export const Q = ({ name = 'Q', tailwind, className, ...props }: RHP.QProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <q data-name={name} className={classes} {...props} />;
};

export const Rp = ({ name = 'Rp', tailwind, className, ...props }: RHP.RPProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <rp data-name={name} className={classes} {...props} />;
};

export const Rt = ({ name = 'Rt', tailwind, className, ...props }: RHP.RTProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <rt data-name={name} className={classes} {...props} />;
};

export const Ruby = ({ name = 'Ruby', tailwind, className, ...props }: RHP.RubyProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <ruby data-name={name} className={classes} {...props} />;
};

export const S = ({ name = 'S', tailwind, className, ...props }: RHP.SProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <s data-name={name} className={classes} {...props} />;
};

export const Samp = ({ name = 'Samp', tailwind, className, ...props }: RHP.SampProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <samp data-name={name} className={classes} {...props} />;
};

export const Script = ({ name = 'Script', tailwind, className, ...props }: RHP.ScriptProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <script data-name={name} className={classes} {...props} />;
};

export const Section = ({ name = 'Section', tailwind, className, ...props }: RHP.SectionProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <section data-name={name} className={classes} {...props} />;
};

export const Select = ({ name = 'Select', tailwind, className, ...props }: RHP.SelectProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <select data-name={name} className={classes} {...props} />;
};

export const Small = ({ name = 'Small', tailwind, className, ...props }: RHP.SmallProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <small data-name={name} className={classes} {...props} />;
};

export const Span = ({ name = 'Span', tailwind, className, ...props }: RHP.SpanProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <span data-name={name} className={classes} {...props} />;
};

export const Ul = ({ name = 'Ul', tailwind, className, ...props }: RHP.ULProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <ul data-name={name} className={classes} {...props} />;
};

export const Strong = ({ name = 'Strong', tailwind, className, ...props }: RHP.StrongProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <strong data-name={name} className={classes} {...props} />;
};

export const Sub = ({ name = 'Sub', tailwind, className, ...props }: RHP.SubProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <sub data-name={name} className={classes} {...props} />;
};

export const Summary = ({ name = 'Summary', tailwind, className, ...props }: RHP.SummaryProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <summary data-name={name} className={classes} {...props} />;
};

export const Sup = ({ name = 'Sup', tailwind, className, ...props }: RHP.SupProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <sup data-name={name} className={classes} {...props} />;
};

export const Table = ({ name = 'Table', tailwind, className, ...props }: RHP.TableProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <table data-name={name} className={classes} {...props} />;
};

export const TBody = ({ name = 'TBody', tailwind, className, ...props }: RHP.TBodyProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <tbody data-name={name} className={classes} {...props} />;
};

export const TD = ({ name = 'TD', tailwind, className, ...props }: RHP.TDProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <td data-name={name} className={classes} {...props} />;
};

export const Template = ({ name = 'Template', tailwind, className, ...props }: RHP.TemplateProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <template data-name={name} className={classes} {...props} />;
};

export const TextArea = ({ name = 'TextArea', tailwind, className, ...props }: RHP.TextAreaProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <textarea data-name={name} className={classes} {...props} />;
};

export const TFoot = ({ name = 'TFoot', tailwind, className, ...props }: RHP.TFootProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <tfoot data-name={name} className={classes} {...props} />;
};

export const TH = ({ name = 'TH', tailwind, className, ...props }: RHP.THProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <th data-name={name} className={classes} {...props} />;
};

export const THead = ({ name = 'THead', tailwind, className, ...props }: RHP.THeadProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <thead data-name={name} className={classes} {...props} />;
};

export const Time = ({ name = 'Time', tailwind, className, ...props }: RHP.TimeProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <time data-name={name} className={classes} {...props} />;
};

export const Title = ({ name = 'Title', tailwind, className, ...props }: RHP.TitleProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <title data-name={name} className={classes} {...props} />;
};

export const TR = ({ name = 'TR', tailwind, className, ...props }: RHP.TRProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <tr data-name={name} className={classes} {...props} />;
};

export const Track = ({ name = 'Track', tailwind, className, ...props }: RHP.TrackProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <track data-name={name} className={classes} {...props} />;
};

export const U = ({ name = 'U', tailwind, className, ...props }: RHP.UProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <u data-name={name} className={classes} {...props} />;
};

export const Var = ({ name = 'Var', tailwind, className, ...props }: RHP.VarProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <var data-name={name} className={classes} {...props} />;
};

export const Video = ({ name = 'Video', tailwind, className, ...props }: RHP.VideoProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <video data-name={name} className={classes} {...props} />;
};

export const Wbr = ({ name = 'Wbr', tailwind, className, ...props }: RHP.WBRProps & LibProps) => {
	const classes = computeTwClassNames({ ...tailwind, className });
	return <wbr data-name={name} className={classes} {...props} />;
};
