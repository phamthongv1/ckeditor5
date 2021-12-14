/**
 * @license Copyright (c) 2014-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor.js';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat.js';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold.js';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder.js';
import CKFinderUploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter.js';
import CloudServices from '@ckeditor/ckeditor5-cloud-services/src/cloudservices.js';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials.js';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor.js';
import Image from '@ckeditor/ckeditor5-image/src/image.js';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption.js';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle.js';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar.js';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload.js';
import Indent from '@ckeditor/ckeditor5-indent/src/indent.js';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic.js';
import Link from '@ckeditor/ckeditor5-link/src/link.js';
import List from '@ckeditor/ckeditor5-list/src/list.js';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph.js';
import SpecialCharacters from '@ckeditor/ckeditor5-special-characters/src/specialcharacters.js';
import Table from '@ckeditor/ckeditor5-table/src/table.js';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar.js';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation.js';
import TodoList from '@ckeditor/ckeditor5-list/src/todolist';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Base64UploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter';
import ImageResizeEditing from '@ckeditor/ckeditor5-image/src/imageresize/imageresizeediting';
import ImageResizeHandles from '@ckeditor/ckeditor5-image/src/imageresize/imageresizehandles';

class Editor extends ClassicEditor {}

function SpecialCharactersEmoji(editor) {
	editor.plugins.get('SpecialCharacters').addItems('Emoji', [
		{ title: 'SMILING FACE WITH SMILING EYES', character: '😊' },
		{ title: 'GRINNING FACE', character: '😀' },
		{ title: 'GRINNING FACE WITH SMILING EYES', character: '😁' },
		{ title: 'FACE WITH TEARS OF JOY', character: '😂' },
		{ title: 'SMILING FACE WITH OPEN MOUTH', character: '😃' },
		{
			title: 'SMILING FACE WITH OPEN MOUTH AND SMILING EYES',
			character: '😄',
		},
		{
			title: 'SMILING FACE WITH OPEN MOUTH AND COLD SWEAT',
			character: '😅',
		},
		{
			title: 'SMILING FACE WITH OPEN MOUTH AND TIGHTLY-CLOSED EYES',
			character: '😆',
		},
		{ title: 'SMILING FACE WITH HALO', character: '😇' },
		{ title: 'SMILING FACE WITH HORNS', character: '😈' },
		{ title: 'WINKING FACE', character: '😉' },
		{ title: 'FACE SAVOURING DELICIOUS FOOD', character: '😋' },
		{ title: 'RELIEVED FACE', character: '😌' },
		{ title: 'SMILING FACE WITH HEART-SHAPED EYES', character: '😍' },
		{ title: 'SMILING FACE WITH SUNGLASSES', character: '😎' },
		{ title: 'SMIRKING FACE', character: '😏' },
		{ title: 'NEUTRAL FACE', character: '😐' },
		{ title: 'EXPRESSIONLESS FACE', character: '😑' },
		{ title: 'UNAMUSED FACE', character: '😒' },
		{ title: 'FACE WITH COLD SWEAT', character: '😓' },
		{ title: 'PENSIVE FACE', character: '😔' },
		{ title: 'CONFUSED FACE', character: '😕' },
		{ title: 'CONFOUNDED FACE', character: '😖' },
		{ title: 'KISSING FACE', character: '😗' },
		{ title: 'FACE THROWING A KISS', character: '😘' },
		{ title: 'KISSING FACE WITH SMILING EYES', character: '😙' },
		{ title: 'KISSING FACE WITH CLOSED EYES', character: '😚' },
		{ title: 'FACE WITH STUCK-OUT TONGUE', character: '😛' },
		{
			title: 'FACE WITH STUCK-OUT TONGUE AND WINKING EYE',
			character: '😜',
		},
		{
			title: 'FACE WITH STUCK-OUT TONGUE AND TIGHTLY-CLOSED EYES',
			character: '😝',
		},
		{ title: 'DISAPPOINTED FACE', character: '😞' },
		{ title: 'WORRIED FACE', character: '😟' },
		{ title: 'ANGRY FACE', character: '😠' },
		{ title: 'POUTING FACE', character: '😡' },
		{ title: 'CRYING FACE', character: '😢' },
		{ title: 'PERSEVERING FACE', character: '😣' },
		{ title: 'FACE WITH LOOK OF TRIUMPH', character: '😤' },
		{ title: 'DISAPPOINTED BUT RELIEVED FACE', character: '😥' },
		{ title: 'FROWNING FACE WITH OPEN MOUTH', character: '😦' },
		{ title: 'ANGUISHED FACE', character: '😧' },
		{ title: 'FEARFUL FACE', character: '😨' },
		{ title: 'WEARY FACE', character: '😩' },
		{ title: 'SLEEPY FACE', character: '😪' },
		{ title: 'TIRED FACE', character: '😫' },
		{ title: 'GRIMACING FACE', character: '😬' },
		{ title: 'LOUDLY CRYING FACE', character: '😭' },
		{ title: 'FACE WITH OPEN MOUTH', character: '😮' },
		{ title: 'HUSHED FACE', character: '😯' },
		{ title: 'FACE WITH OPEN MOUTH AND COLD SWEAT', character: '😰' },
		{ title: 'FACE SCREAMING IN FEAR', character: '😱' },
		{ title: 'ASTONISHED FACE', character: '😲' },
		{ title: 'FLUSHED FACE', character: '😳' },
		{ title: 'SLEEPING FACE', character: '😴' },
		{ title: 'DIZZY FACE', character: '😵' },
		{ title: 'FACE WITHOUT MOUTH', character: '😶' },
		{ title: 'FACE WITH MEDICAL MASK', character: '😷' },
	]);
}

// Plugins to include in the build.
Editor.builtinPlugins = [
	Autoformat,
	Bold,
	CKFinder,
	CKFinderUploadAdapter,
	CloudServices,
	Essentials,
	EasyImage,
	FontColor,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Indent,
	Italic,
	Link,
	List,
	Paragraph,
	SpecialCharacters,
	Table,
	TableToolbar,
	TextTransformation,
	TodoList,
	Underline,
	Base64UploadAdapter,
	ImageResizeEditing,
	ImageResizeHandles,
	SpecialCharactersEmoji,
];

// Editor configuration.
Editor.defaultConfig = {
	toolbar: {
		items: [
			'bold',
			'italic',
			'underline',
			'fontColor',
			'|',
			'bulletedList',
			'todoList',
			'numberedList',
			'insertTable',
			'|',
			'specialCharacters',
			'ckfinder',
		],
	},
	language: 'en',
	ckfinder: {
		// Upload the images to the server using the CKFinder QuickUpload command.
		uploadUrl:
			'https://example.com/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images&responseType=json',

		openerMethod: 'popup',
	},
};

export default Editor;
