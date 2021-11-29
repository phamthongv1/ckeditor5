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
 import SpecialCharactersEssentials from '@ckeditor/ckeditor5-special-characters/src/specialcharactersessentials.js';
 import Table from '@ckeditor/ckeditor5-table/src/table.js';
 import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar.js';
 import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation.js';
 import TodoList from '@ckeditor/ckeditor5-list/src/todolist';
 import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
 
 class Editor extends ClassicEditor {}

 function SpecialCharactersEmoji( editor ) {
    editor.plugins.get( 'SpecialCharacters' ).addItems( 'Emoji', [
        { title: 'smiley face', character: '😊' },
        { title: 'rocket', character: '🚀' },
        { title: 'wind blowing face', character: '🌬️' },
        { title: 'floppy disk', character: '💾' },
        { title: 'heart', character: '❤️' }
    ] );
}
 
 // Plugins to include in the build.
 Editor.builtinPlugins = [
	 Autoformat,
	 Bold,
	 CKFinder,
	 CKFinderUploadAdapter,
	 CloudServices,
	 Essentials,
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
	 SpecialCharactersEssentials,
	 Table,
	 TableToolbar,
	 TextTransformation,
	 TodoList,
	 Underline,
	 SpecialCharactersEmoji
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
			 'imageUpload',
			 'CKFinder'
		 ]
	 },
	 language: 'en',
	 image: {
		 toolbar: [
			 'imageTextAlternative',
			 'imageStyle:inline',
			 'imageStyle:block',
			 'imageStyle:side'
		 ]
	 },
	 table: {
		 contentToolbar: [
			 'tableColumn',
			 'tableRow',
			 'mergeTableCells'
		 ]
	 }
 };
 
 export default Editor;
 