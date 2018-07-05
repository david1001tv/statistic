<?php
Yii::import('system.web.widgets.CWidget');

class ContentWidget extends CWidget {

    public $data = array();
    public $htmlOptions = array();

    public function init(){
        parent::init();
        if(!isset($this->htmlOptions['class'])) {
            $this->htmlOptions['class'] = 'content';
        }
        if(!isset($this->htmlOptions['id'])) {
            $this->htmlOptions['id'] = 'widget';
        }
    }

    public function run() {
        CHtml::tag('div', $this->htmlOptions, implode("\n", $this->data));
    }
}