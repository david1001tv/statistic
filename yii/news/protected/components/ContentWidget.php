<?php
Yii::import('system.web.widgets.CWidget');

class ContentWidget extends CWidget {

    public $cssFile;
    public $htmlOptions = array();

    public function init(){
        parent::init();
        $this->cssFile = Yii::app()->getBaseUrl(true).'/css/list.css';
        if(!isset($this->htmlOptions['id'])) {
            $this->htmlOptions['id'] = 'widget';
        }
    }

    public function run() {
        $this->registerClientScript();
        echo CHtml::tag('div', $this->htmlOptions);
    }

    public function registerClientScript()
	{
        if($this->cssFile!==false)
        {
            Yii::app()->getClientScript()->registerCssFile($this->cssFile);
        }
	}
}