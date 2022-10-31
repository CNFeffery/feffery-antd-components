/* eslint-disable import/prefer-default-export */
import 'antd/dist/antd.variable.min.css';
import AntdDatePicker from './components/AntdDatePicker.react';
import AntdDateRangePicker from './components/AntdDateRangePicker.react';
import AntdDivider from './components/AntdDivider.react';
import AntdButton from './components/AntdButton.react';
import AntdSelect from './components/AntdSelect.react';
import AntdTree from './components/AntdTree.react';
import AntdTable from './components/AntdTable.react';
import AntdAnchor from './components/AntdAnchor.react';
import AntdSlider from './components/AntdSlider.react';
import AntdTransfer from './components/AntdTransfer.react';
import AntdSteps from './components/AntdSteps.react';
import AntdMenu from './components/AntdMenu.react';
import AntdCollapse from './components/AntdCollapse.react';
import AntdRow from './components/grid/AntdRow.react';
import AntdCol from './components/grid/AntdCol.react';
import AntdLayout from './components/layout/AntdLayout.react';
import AntdHeader from './components/layout/AntdHeader.react';
import AntdContent from './components/layout/AntdContent.react';
import AntdFooter from './components/layout/AntdFooter.react';
import AntdSider from './components/layout/AntdSider.react';
import AntdSpace from './components/AntdSpace.react';
import AntdModal from './components/AntdModal.react';
import AntdAlert from './components/AntdAlert.react';
import AntdNotification from './components/AntdNotification.react';
import AntdMessage from './components/AntdMessage.react';
import AntdTag from './components/AntdTag.react';
import AntdResult from './components/AntdResult.react';
import AntdInput from './components/AntdInput.react';
import AntdTooltip from './components/AntdTooltip.react';
import AntdCheckbox from './components/AntdCheckbox.react';
import AntdCheckboxGroup from './components/AntdCheckboxGroup.react';
import AntdSpin from './components/AntdSpin.react';
import AntdSwitch from './components/AntdSwitch.react';
import AntdParagraph from './components/typography/AntdParagraph.react';
import AntdText from './components/typography/AntdText.react';
import AntdTitle from './components/typography/AntdTitle.react';
import AntdTabPane from './components/tabs/AntdTabPane.react';
import AntdTabs from './components/tabs/AntdTabs.react';
import AntdPagination from './components/AntdPagination.react';
import AntdTreeSelect from './components/AntdTreeSelect.react';
import AntdDrawer from './components/AntdDrawer.react';
import AntdPopover from './components/AntdPopover.react';
import AntdEmpty from './components/AntdEmpty.react';
import AntdCascader from './components/AntdCascader.react';
import AntdRadioGroup from './components/AntdRadioGroup.react';
import AntdIcon from './components/AntdIcon.react';
import AntdPopconfirm from './components/AntdPopconfirm.react';
import AntdBackTop from './components/AntdBackTop.react';
import AntdSkeleton from './components/skeleton/AntdSkeleton.react';
import AntdAffix from './components/AntdAffix.react';
import AntdBreadcrumb from './components/AntdBreadcrumb.react';
import AntdDropdown from './components/AntdDropdown.react';
import AntdInputNumber from './components/AntdInputNumber.react';
import AntdRate from './components/AntdRate.react';
import AntdStatistic from './components/AntdStatistic.react';
import AntdCountdown from './components/AntdCountdown.react';
import AntdTimeline from './components/AntdTimeline.react';
import AntdProgress from './components/AntdProgress.react';
import AntdAvatar from './components/AntdAvatar.react';
import AntdBadge from './components/AntdBadge.react';
import AntdRibbon from './components/AntdRibbon.react';
import AntdTimePicker from './components/AntdTimePicker.react';
import AntdTimeRangePicker from './components/AntdTimeRangePicker.react';
import AntdCarousel from './components/AntdCarousel.react';
import AntdFormItem from './components/form/AntdFormItem.react';
import AntdForm from './components/form/AntdForm.react';
import AntdCardGrid from './components/card/AntdCardGrid.react';
import AntdCard from './components/card/AntdCard.react';
import AntdMentions from './components/AntdMentions.react';
import AntdImage from './components/AntdImage.react';
import AntdPageHeader from './components/AntdPageHeader.react';
import AntdCalendar from './components/AntdCalendar.react';
import AntdComment from './components/AntdComment.react';
import AntdDescriptions from './components/descriptions/AntdDescriptions.react';
import AntdDescriptionItem from './components/descriptions/AntdDescriptionItem.react';
import AntdWatermark from './components/AntdWatermark.react';
import AntdPasteImage from './components/AntdPasteImage.react';
import AntdSegmented from './components/AntdSegmented.react';
import AntdCheckCard from './components/check-card/AntdCheckCard.react';
import AntdCheckCardGroup from './components/check-card/AntdCheckCardGroup.react';
import AntdAccordion from './components/AntdAccordion.react';
import AntdPictureUpload from './components/upload/AntdPictureUpload.react';
import AntdDraggerUpload from './components/upload/AntdDraggerUpload.react';
import AntdUpload from './components/upload/AntdUpload.react';
import AntdCustomSkeleton from './components/skeleton/AntdCustomSkeleton.react';
import AntdSkeletonAvatar from './components/skeleton/AntdSkeletonAvatar.react';
import AntdSkeletonButton from './components/skeleton/AntdSkeletonButton.react';
import AntdSkeletonInput from './components/skeleton/AntdSkeletonInput.react';
import AntdSkeletonImage from './components/skeleton/AntdSkeletonImage.react';
import AntdSegmentedColoring from './components/AntdSegmentedColoring.react';
import AntdCopyText from './components/AntdCopyText.react';
import AntdPopupCard from './components/AntdPopupCard.react';
import AntdConfigProvider from './components/AntdConfigProvider';

/* 
忽略部分设计React中规范的console警告信息
目前已知无关警告信息：
1. 数组推导形成的组件，每个子组件需要唯一的key
2. 在原生html元素中携带小驼峰命名法的props
*/
try {
    consoleErrorBackup
} catch (e) {
    const consoleErrorBackup = console.error;
    console.error = (msg) => {
        const supressedWarnings = [
            'Each child in a list should have a unique',
            'React does not recognize the'
        ];

        if (!supressedWarnings.some(entry => msg.includes && msg.includes(entry))) {
            consoleErrorBackup(msg);
        }
    };
}

export {
    AntdDatePicker,
    AntdDateRangePicker,
    AntdDivider,
    AntdButton,
    AntdSelect,
    AntdTree,
    AntdTable,
    AntdAnchor,
    AntdSlider,
    AntdTransfer,
    AntdSteps,
    AntdMenu,
    AntdCollapse,
    AntdRow,
    AntdCol,
    AntdLayout,
    AntdHeader,
    AntdContent,
    AntdFooter,
    AntdSider,
    AntdSpace,
    AntdModal,
    AntdAlert,
    AntdNotification,
    AntdMessage,
    AntdTag,
    AntdResult,
    AntdInput,
    AntdTooltip,
    AntdCheckbox,
    AntdCheckboxGroup,
    AntdSpin,
    AntdSwitch,
    AntdParagraph,
    AntdText,
    AntdTitle,
    AntdTabPane,
    AntdTabs,
    AntdPagination,
    AntdTreeSelect,
    AntdDrawer,
    AntdPopover,
    AntdEmpty,
    AntdCascader,
    AntdRadioGroup,
    AntdUpload,
    AntdIcon,
    AntdPopconfirm,
    AntdBackTop,
    AntdSkeleton,
    AntdAffix,
    AntdBreadcrumb,
    AntdDropdown,
    AntdInputNumber,
    AntdRate,
    AntdStatistic,
    AntdCountdown,
    AntdTimeline,
    AntdProgress,
    AntdAvatar,
    AntdBadge,
    AntdRibbon,
    AntdTimePicker,
    AntdTimeRangePicker,
    AntdCarousel,
    AntdDraggerUpload,
    AntdFormItem,
    AntdForm,
    AntdCardGrid,
    AntdCard,
    AntdMentions,
    AntdImage,
    AntdPageHeader,
    AntdCalendar,
    AntdComment,
    AntdDescriptions,
    AntdDescriptionItem,
    AntdWatermark,
    AntdPasteImage,
    AntdSegmented,
    AntdCheckCard,
    AntdCheckCardGroup,
    AntdAccordion,
    AntdPictureUpload,
    AntdCustomSkeleton,
    AntdSkeletonAvatar,
    AntdSkeletonButton,
    AntdSkeletonInput,
    AntdSkeletonImage,
    AntdSegmentedColoring,
    AntdCopyText,
    AntdPopupCard,
    AntdConfigProvider
};
