<?php
Yii::import('system.web.widgets.CWidget');

class ContentWidget extends CWidget {

    public $htmlOptions = array();

    public function init(){
        parent::init();
        if(!isset($this->htmlOptions['id'])) {
            $this->htmlOptions['id'] = 'widget';
        }
    }

    public function run() {
        echo CHtml::tag('div', $this->htmlOptions);
    }
}