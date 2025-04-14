
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = (T & DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }>)
interface _GlobalComponents {
      'AppHeader': typeof import("../components/AppHeader.vue")['default']
    'NuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
    'ClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'NuxtPicture': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'ElAffix': typeof import("../node_modules/element-plus/es/components/affix/index")['ElAffix']
    'ElAlert': typeof import("../node_modules/element-plus/es/components/alert/index")['ElAlert']
    'ElAnchorLink': typeof import("../node_modules/element-plus/es/components/anchor/index")['ElAnchorLink']
    'ElAnchor': typeof import("../node_modules/element-plus/es/components/anchor/index")['ElAnchor']
    'ElAside': typeof import("../node_modules/element-plus/es/components/container/index")['ElAside']
    'ElAutoResizer': typeof import("../node_modules/element-plus/es/components/table-v2/index")['ElAutoResizer']
    'ElAvatar': typeof import("../node_modules/element-plus/es/components/avatar/index")['ElAvatar']
    'ElAutocomplete': typeof import("../node_modules/element-plus/es/components/autocomplete/index")['ElAutocomplete']
    'ElBacktop': typeof import("../node_modules/element-plus/es/components/backtop/index")['ElBacktop']
    'ElBadge': typeof import("../node_modules/element-plus/es/components/badge/index")['ElBadge']
    'ElBreadcrumb': typeof import("../node_modules/element-plus/es/components/breadcrumb/index")['ElBreadcrumb']
    'ElBreadcrumbItem': typeof import("../node_modules/element-plus/es/components/breadcrumb/index")['ElBreadcrumbItem']
    'ElButton': typeof import("../node_modules/element-plus/es/components/button/index")['ElButton']
    'ElButtonGroup': typeof import("../node_modules/element-plus/es/components/button/index")['ElButtonGroup']
    'ElCalendar': typeof import("../node_modules/element-plus/es/components/calendar/index")['ElCalendar']
    'ElCard': typeof import("../node_modules/element-plus/es/components/card/index")['ElCard']
    'ElCarousel': typeof import("../node_modules/element-plus/es/components/carousel/index")['ElCarousel']
    'ElCarouselItem': typeof import("../node_modules/element-plus/es/components/carousel/index")['ElCarouselItem']
    'ElCascader': typeof import("../node_modules/element-plus/es/components/cascader/index")['ElCascader']
    'ElCascaderPanel': typeof import("../node_modules/element-plus/es/components/cascader-panel/index")['ElCascaderPanel']
    'ElCheckTag': typeof import("../node_modules/element-plus/es/components/check-tag/index")['ElCheckTag']
    'ElCheckbox': typeof import("../node_modules/element-plus/es/components/checkbox/index")['ElCheckbox']
    'ElCheckboxButton': typeof import("../node_modules/element-plus/es/components/checkbox/index")['ElCheckboxButton']
    'ElCheckboxGroup': typeof import("../node_modules/element-plus/es/components/checkbox/index")['ElCheckboxGroup']
    'ElCol': typeof import("../node_modules/element-plus/es/components/col/index")['ElCol']
    'ElCollapseItem': typeof import("../node_modules/element-plus/es/components/collapse/index")['ElCollapseItem']
    'ElCollapse': typeof import("../node_modules/element-plus/es/components/collapse/index")['ElCollapse']
    'ElCollapseTransition': typeof import("../node_modules/element-plus/es/components/collapse-transition/index")['ElCollapseTransition']
    'ElCollection': typeof import("../node_modules/element-plus/es/components/collection/index")['ElCollection']
    'ElColorPicker': typeof import("../node_modules/element-plus/es/components/color-picker/index")['ElColorPicker']
    'ElCollectionItem': typeof import("../node_modules/element-plus/es/components/collection/index")['ElCollectionItem']
    'ElContainer': typeof import("../node_modules/element-plus/es/components/container/index")['ElContainer']
    'ElCountdown': typeof import("../node_modules/element-plus/es/components/countdown/index")['ElCountdown']
    'ElDatePicker': typeof import("../node_modules/element-plus/es/components/date-picker/index")['ElDatePicker']
    'ElDescriptions': typeof import("../node_modules/element-plus/es/components/descriptions/index")['ElDescriptions']
    'ElDialog': typeof import("../node_modules/element-plus/es/components/dialog/index")['ElDialog']
    'ElDescriptionsItem': typeof import("../node_modules/element-plus/es/components/descriptions/index")['ElDescriptionsItem']
    'ElDrawer': typeof import("../node_modules/element-plus/es/components/drawer/index")['ElDrawer']
    'ElDivider': typeof import("../node_modules/element-plus/es/components/divider/index")['ElDivider']
    'ElDropdown': typeof import("../node_modules/element-plus/es/components/dropdown/index")['ElDropdown']
    'ElFooter': typeof import("../node_modules/element-plus/es/components/container/index")['ElFooter']
    'ElConfigProvider': typeof import("../node_modules/element-plus/es/components/config-provider/index")['ElConfigProvider']
    'ElDropdownItem': typeof import("../node_modules/element-plus/es/components/dropdown/index")['ElDropdownItem']
    'ElDropdownMenu': typeof import("../node_modules/element-plus/es/components/dropdown/index")['ElDropdownMenu']
    'ElEmpty': typeof import("../node_modules/element-plus/es/components/empty/index")['ElEmpty']
    'ElForm': typeof import("../node_modules/element-plus/es/components/form/index")['ElForm']
    'ElFormItem': typeof import("../node_modules/element-plus/es/components/form/index")['ElFormItem']
    'ElIcon': typeof import("../node_modules/element-plus/es/components/icon/index")['ElIcon']
    'ElImage': typeof import("../node_modules/element-plus/es/components/image/index")['ElImage']
    'ElImageViewer': typeof import("../node_modules/element-plus/es/components/image-viewer/index")['ElImageViewer']
    'ElInput': typeof import("../node_modules/element-plus/es/components/input/index")['ElInput']
    'ElHeader': typeof import("../node_modules/element-plus/es/components/container/index")['ElHeader']
    'ElInputNumber': typeof import("../node_modules/element-plus/es/components/input-number/index")['ElInputNumber']
    'ElInputTag': typeof import("../node_modules/element-plus/es/components/input-tag/index")['ElInputTag']
    'ElMain': typeof import("../node_modules/element-plus/es/components/container/index")['ElMain']
    'ElLink': typeof import("../node_modules/element-plus/es/components/link/index")['ElLink']
    'ElMenu': typeof import("../node_modules/element-plus/es/components/menu/index")['ElMenu']
    'ElMenuItem': typeof import("../node_modules/element-plus/es/components/menu/index")['ElMenuItem']
    'ElMention': typeof import("../node_modules/element-plus/es/components/mention/index")['ElMention']
    'ElMenuItemGroup': typeof import("../node_modules/element-plus/es/components/menu/index")['ElMenuItemGroup']
    'ElOption': typeof import("../node_modules/element-plus/es/components/select/index")['ElOption']
    'ElOverlay': typeof import("../node_modules/element-plus/es/components/overlay/index")['ElOverlay']
    'ElOptionGroup': typeof import("../node_modules/element-plus/es/components/select/index")['ElOptionGroup']
    'ElPagination': typeof import("../node_modules/element-plus/es/components/pagination/index")['ElPagination']
    'ElPageHeader': typeof import("../node_modules/element-plus/es/components/page-header/index")['ElPageHeader']
    'ElPopconfirm': typeof import("../node_modules/element-plus/es/components/popconfirm/index")['ElPopconfirm']
    'ElPopover': typeof import("../node_modules/element-plus/es/components/popover/index")['ElPopover']
    'ElPopper': typeof import("../node_modules/element-plus/es/components/popper/index")['ElPopper']
    'ElPopperArrow': typeof import("../node_modules/element-plus/es/components/popper/index")['ElPopperArrow']
    'ElPopperContent': typeof import("../node_modules/element-plus/es/components/popper/index")['ElPopperContent']
    'ElPopperTrigger': typeof import("../node_modules/element-plus/es/components/popper/index")['ElPopperTrigger']
    'ElProgress': typeof import("../node_modules/element-plus/es/components/progress/index")['ElProgress']
    'ElRadio': typeof import("../node_modules/element-plus/es/components/radio/index")['ElRadio']
    'ElRadioButton': typeof import("../node_modules/element-plus/es/components/radio/index")['ElRadioButton']
    'ElRadioGroup': typeof import("../node_modules/element-plus/es/components/radio/index")['ElRadioGroup']
    'ElRate': typeof import("../node_modules/element-plus/es/components/rate/index")['ElRate']
    'ElRow': typeof import("../node_modules/element-plus/es/components/row/index")['ElRow']
    'ElScrollbar': typeof import("../node_modules/element-plus/es/components/scrollbar/index")['ElScrollbar']
    'ElSegmented': typeof import("../node_modules/element-plus/es/components/segmented/index")['ElSegmented']
    'ElSelect': typeof import("../node_modules/element-plus/es/components/select/index")['ElSelect']
    'ElSelectV2': typeof import("../node_modules/element-plus/es/components/select-v2/index")['ElSelectV2']
    'ElSkeleton': typeof import("../node_modules/element-plus/es/components/skeleton/index")['ElSkeleton']
    'ElSkeletonItem': typeof import("../node_modules/element-plus/es/components/skeleton/index")['ElSkeletonItem']
    'ElSlider': typeof import("../node_modules/element-plus/es/components/slider/index")['ElSlider']
    'ElSpace': typeof import("../node_modules/element-plus/es/components/space/index")['ElSpace']
    'ElStatistic': typeof import("../node_modules/element-plus/es/components/statistic/index")['ElStatistic']
    'ElStep': typeof import("../node_modules/element-plus/es/components/steps/index")['ElStep']
    'ElSteps': typeof import("../node_modules/element-plus/es/components/steps/index")['ElSteps']
    'ElResult': typeof import("../node_modules/element-plus/es/components/result/index")['ElResult']
    'ElSubMenu': typeof import("../node_modules/element-plus/es/components/menu/index")['ElSubMenu']
    'ElSwitch': typeof import("../node_modules/element-plus/es/components/switch/index")['ElSwitch']
    'ElTabPane': typeof import("../node_modules/element-plus/es/components/tabs/index")['ElTabPane']
    'ElTable': typeof import("../node_modules/element-plus/es/components/table/index")['ElTable']
    'ElTableColumn': typeof import("../node_modules/element-plus/es/components/table/index")['ElTableColumn']
    'ElTableV2': typeof import("../node_modules/element-plus/es/components/table-v2/index")['ElTableV2']
    'ElTabs': typeof import("../node_modules/element-plus/es/components/tabs/index")['ElTabs']
    'ElTag': typeof import("../node_modules/element-plus/es/components/tag/index")['ElTag']
    'ElText': typeof import("../node_modules/element-plus/es/components/text/index")['ElText']
    'ElTimePicker': typeof import("../node_modules/element-plus/es/components/time-picker/index")['ElTimePicker']
    'ElTimeSelect': typeof import("../node_modules/element-plus/es/components/time-select/index")['ElTimeSelect']
    'ElTimeline': typeof import("../node_modules/element-plus/es/components/timeline/index")['ElTimeline']
    'ElTimelineItem': typeof import("../node_modules/element-plus/es/components/timeline/index")['ElTimelineItem']
    'ElTooltip': typeof import("../node_modules/element-plus/es/components/tooltip/index")['ElTooltip']
    'ElTour': typeof import("../node_modules/element-plus/es/components/tour/index")['ElTour']
    'ElTourStep': typeof import("../node_modules/element-plus/es/components/tour/index")['ElTourStep']
    'ElTransfer': typeof import("../node_modules/element-plus/es/components/transfer/index")['ElTransfer']
    'ElTree': typeof import("../node_modules/element-plus/es/components/tree/index")['ElTree']
    'ElTreeSelect': typeof import("../node_modules/element-plus/es/components/tree-select/index")['ElTreeSelect']
    'ElUpload': typeof import("../node_modules/element-plus/es/components/upload/index")['ElUpload']
    'ElTreeV2': typeof import("../node_modules/element-plus/es/components/tree-v2/index")['ElTreeV2']
    'ElWatermark': typeof import("../node_modules/element-plus/es/components/watermark/index")['ElWatermark']
    'ElIconAddLocation': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['AddLocation']
    'ElIconAlarmClock': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['AlarmClock']
    'ElIconAim': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Aim']
    'ElIconApple': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Apple']
    'ElIconArrowDown': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowDown']
    'ElIconArrowDownBold': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowDownBold']
    'ElIconArrowLeft': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowLeft']
    'ElIconArrowLeftBold': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowLeftBold']
    'ElIconArrowRight': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowRight']
    'ElIconArrowRightBold': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowRightBold']
    'ElIconArrowUp': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowUp']
    'ElIconArrowUpBold': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowUpBold']
    'ElIconAvatar': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Avatar']
    'ElIconBack': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Back']
    'ElIconBasketball': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Basketball']
    'ElIconBaseball': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Baseball']
    'ElIconBell': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Bell']
    'ElIconBellFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['BellFilled']
    'ElIconBicycle': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Bicycle']
    'ElIconBottomLeft': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['BottomLeft']
    'ElIconBottomRight': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['BottomRight']
    'ElIconBottom': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Bottom']
    'ElIconBox': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Box']
    'ElIconBriefcase': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Briefcase']
    'ElIconBowl': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Bowl']
    'ElIconBurger': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Burger']
    'ElIconBrush': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Brush']
    'ElIconBrushFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['BrushFilled']
    'ElIconCamera': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Camera']
    'ElIconCalendar': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Calendar']
    'ElIconCameraFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CameraFilled']
    'ElIconCaretBottom': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CaretBottom']
    'ElIconCaretLeft': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CaretLeft']
    'ElIconCaretTop': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CaretTop']
    'ElIconCaretRight': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CaretRight']
    'ElIconCellphone': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Cellphone']
    'ElIconChatDotRound': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatDotRound']
    'ElIconChatDotSquare': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatDotSquare']
    'ElIconChatLineSquare': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatLineSquare']
    'ElIconChatSquare': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatSquare']
    'ElIconChatLineRound': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatLineRound']
    'ElIconCheck': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Check']
    'ElIconChatRound': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatRound']
    'ElIconChecked': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Checked']
    'ElIconCherry': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Cherry']
    'ElIconChicken': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Chicken']
    'ElIconCircleCheck': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CircleCheck']
    'ElIconChromeFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChromeFilled']
    'ElIconCircleCheckFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CircleCheckFilled']
    'ElIconCircleClose': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CircleClose']
    'ElIconCircleCloseFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CircleCloseFilled']
    'ElIconCirclePlus': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CirclePlus']
    'ElIconCirclePlusFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CirclePlusFilled']
    'ElIconClock': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Clock']
    'ElIconClose': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Close']
    'ElIconCloseBold': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CloseBold']
    'ElIconCloudy': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Cloudy']
    'ElIconCoffee': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Coffee']
    'ElIconCoffeeCup': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CoffeeCup']
    'ElIconCoin': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Coin']
    'ElIconColdDrink': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ColdDrink']
    'ElIconCollection': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Collection']
    'ElIconCollectionTag': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CollectionTag']
    'ElIconComment': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Comment']
    'ElIconCompass': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Compass']
    'ElIconConnection': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Connection']
    'ElIconCoordinate': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Coordinate']
    'ElIconCopyDocument': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CopyDocument']
    'ElIconCrop': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Crop']
    'ElIconCreditCard': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CreditCard']
    'ElIconCpu': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Cpu']
    'ElIconDArrowLeft': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DArrowLeft']
    'ElIconDArrowRight': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DArrowRight']
    'ElIconDataAnalysis': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DataAnalysis']
    'ElIconDataBoard': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DataBoard']
    'ElIconDCaret': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DCaret']
    'ElIconDelete': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Delete']
    'ElIconDeleteLocation': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DeleteLocation']
    'ElIconDeleteFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DeleteFilled']
    'ElIconDataLine': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DataLine']
    'ElIconDessert': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Dessert']
    'ElIconDiscount': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Discount']
    'ElIconDish': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Dish']
    'ElIconDishDot': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DishDot']
    'ElIconDocument': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Document']
    'ElIconDocumentAdd': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentAdd']
    'ElIconDocumentChecked': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentChecked']
    'ElIconDocumentCopy': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentCopy']
    'ElIconDocumentDelete': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentDelete']
    'ElIconDocumentRemove': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentRemove']
    'ElIconDownload': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Download']
    'ElIconDrizzling': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Drizzling']
    'ElIconEdit': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Edit']
    'ElIconEditPen': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['EditPen']
    'ElIconEleme': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Eleme']
    'ElIconElemeFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ElemeFilled']
    'ElIconElementPlus': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ElementPlus']
    'ElIconExpand': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Expand']
    'ElIconFailed': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Failed']
    'ElIconFemale': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Female']
    'ElIconFiles': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Files']
    'ElIconFilm': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Film']
    'ElIconFilter': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Filter']
    'ElIconFinished': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Finished']
    'ElIconFirstAidKit': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FirstAidKit']
    'ElIconFlag': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Flag']
    'ElIconFold': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Fold']
    'ElIconFolder': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Folder']
    'ElIconFolderAdd': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderAdd']
    'ElIconFolderChecked': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderChecked']
    'ElIconFolderDelete': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderDelete']
    'ElIconFolderOpened': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderOpened']
    'ElIconFolderRemove': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderRemove']
    'ElIconFood': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Food']
    'ElIconFootball': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Football']
    'ElIconForkSpoon': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ForkSpoon']
    'ElIconFries': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Fries']
    'ElIconFullScreen': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FullScreen']
    'ElIconGoblet': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Goblet']
    'ElIconGobletFull': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GobletFull']
    'ElIconGobletSquare': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GobletSquare']
    'ElIconGobletSquareFull': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GobletSquareFull']
    'ElIconGoldMedal': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GoldMedal']
    'ElIconGoods': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Goods']
    'ElIconGrid': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Grid']
    'ElIconGoodsFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GoodsFilled']
    'ElIconGuide': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Guide']
    'ElIconGrape': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Grape']
    'ElIconHeadset': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Headset']
    'ElIconHandbag': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Handbag']
    'ElIconHelp': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Help']
    'ElIconHelpFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['HelpFilled']
    'ElIconHide': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Hide']
    'ElIconHomeFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['HomeFilled']
    'ElIconHotWater': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['HotWater']
    'ElIconHouse': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['House']
    'ElIconHistogram': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Histogram']
    'ElIconIceCream': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceCream']
    'ElIconIceCreamRound': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceCreamRound']
    'ElIconIceDrink': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceDrink']
    'ElIconIceTea': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceTea']
    'ElIconInfoFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['InfoFilled']
    'ElIconIphone': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Iphone']
    'ElIconIceCreamSquare': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceCreamSquare']
    'ElIconKey': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Key']
    'ElIconKnifeFork': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['KnifeFork']
    'ElIconLightning': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Lightning']
    'ElIconLink': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Link']
    'ElIconLocation': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Location']
    'ElIconLocationFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['LocationFilled']
    'ElIconLoading': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Loading']
    'ElIconLock': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Lock']
    'ElIconLollipop': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Lollipop']
    'ElIconList': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['List']
    'ElIconLocationInformation': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['LocationInformation']
    'ElIconMagicStick': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MagicStick']
    'ElIconMagnet': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Magnet']
    'ElIconMale': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Male']
    'ElIconMapLocation': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MapLocation']
    'ElIconMemo': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Memo']
    'ElIconManagement': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Management']
    'ElIconMedal': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Medal']
    'ElIconMenu': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Menu']
    'ElIconMessage': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Message']
    'ElIconMessageBox': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MessageBox']
    'ElIconMicrophone': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Microphone']
    'ElIconMic': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Mic']
    'ElIconMilkTea': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MilkTea']
    'ElIconMinus': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Minus']
    'ElIconMonitor': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Monitor']
    'ElIconMoney': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Money']
    'ElIconMoon': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Moon']
    'ElIconMoonNight': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MoonNight']
    'ElIconMoreFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MoreFilled']
    'ElIconMouse': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Mouse']
    'ElIconMostlyCloudy': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MostlyCloudy']
    'ElIconMore': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['More']
    'ElIconMuteNotification': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MuteNotification']
    'ElIconMute': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Mute']
    'ElIconNotebook': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Notebook']
    'ElIconMug': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Mug']
    'ElIconNotification': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Notification']
    'ElIconNoSmoking': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['NoSmoking']
    'ElIconOfficeBuilding': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['OfficeBuilding']
    'ElIconOpen': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Open']
    'ElIconOperation': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Operation']
    'ElIconOpportunity': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Opportunity']
    'ElIconOrange': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Orange']
    'ElIconPaperclip': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Paperclip']
    'ElIconPartlyCloudy': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PartlyCloudy']
    'ElIconPear': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Pear']
    'ElIconOdometer': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Odometer']
    'ElIconPhone': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Phone']
    'ElIconPhoneFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PhoneFilled']
    'ElIconPictureFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PictureFilled']
    'ElIconPictureRounded': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PictureRounded']
    'ElIconPicture': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Picture']
    'ElIconPieChart': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PieChart']
    'ElIconPlace': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Place']
    'ElIconPlatform': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Platform']
    'ElIconPlus': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Plus']
    'ElIconPointer': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Pointer']
    'ElIconPosition': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Position']
    'ElIconPostcard': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Postcard']
    'ElIconPouring': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Pouring']
    'ElIconPresent': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Present']
    'ElIconPriceTag': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PriceTag']
    'ElIconPrinter': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Printer']
    'ElIconPromotion': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Promotion']
    'ElIconQuartzWatch': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['QuartzWatch']
    'ElIconQuestionFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['QuestionFilled']
    'ElIconRank': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Rank']
    'ElIconReading': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Reading']
    'ElIconReadingLamp': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ReadingLamp']
    'ElIconRefresh': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Refresh']
    'ElIconRefreshRight': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['RefreshRight']
    'ElIconRefreshLeft': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['RefreshLeft']
    'ElIconRefrigerator': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Refrigerator']
    'ElIconRemove': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Remove']
    'ElIconRemoveFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['RemoveFilled']
    'ElIconScaleToOriginal': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ScaleToOriginal']
    'ElIconRight': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Right']
    'ElIconScissor': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Scissor']
    'ElIconSearch': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Search']
    'ElIconSelect': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Select']
    'ElIconSchool': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['School']
    'ElIconSell': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sell']
    'ElIconService': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Service']
    'ElIconSetUp': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SetUp']
    'ElIconSetting': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Setting']
    'ElIconShare': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Share']
    'ElIconShip': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Ship']
    'ElIconShop': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Shop']
    'ElIconShoppingBag': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ShoppingBag']
    'ElIconSoccer': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Soccer']
    'ElIconShoppingCart': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ShoppingCart']
    'ElIconSmoking': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Smoking']
    'ElIconShoppingTrolley': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ShoppingTrolley']
    'ElIconShoppingCartFull': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ShoppingCartFull']
    'ElIconSort': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sort']
    'ElIconSemiSelect': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SemiSelect']
    'ElIconSortDown': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SortDown']
    'ElIconStamp': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Stamp']
    'ElIconSortUp': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SortUp']
    'ElIconStar': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Star']
    'ElIconStarFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['StarFilled']
    'ElIconStopwatch': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Stopwatch']
    'ElIconSugar': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sugar']
    'ElIconSoldOut': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SoldOut']
    'ElIconSuccessFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SuccessFilled']
    'ElIconSuitcase': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Suitcase']
    'ElIconSuitcaseLine': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SuitcaseLine']
    'ElIconSunset': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sunset']
    'ElIconSwitch': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Switch']
    'ElIconSwitchButton': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SwitchButton']
    'ElIconTakeawayBox': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TakeawayBox']
    'ElIconSwitchFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SwitchFilled']
    'ElIconTicket': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Ticket']
    'ElIconTimer': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Timer']
    'ElIconTickets': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Tickets']
    'ElIconToiletPaper': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ToiletPaper']
    'ElIconTools': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Tools']
    'ElIconTop': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Top']
    'ElIconTopLeft': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TopLeft']
    'ElIconTrendCharts': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TrendCharts']
    'ElIconTrophy': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Trophy']
    'ElIconTrophyBase': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TrophyBase']
    'ElIconSunrise': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sunrise']
    'ElIconTurnOff': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TurnOff']
    'ElIconUnlock': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Unlock']
    'ElIconUpload': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Upload']
    'ElIconTopRight': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TopRight']
    'ElIconUmbrella': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Umbrella']
    'ElIconUploadFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['UploadFilled']
    'ElIconUser': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['User']
    'ElIconVan': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Van']
    'ElIconVideoCameraFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['VideoCameraFilled']
    'ElIconVideoCamera': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['VideoCamera']
    'ElIconVideoPause': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['VideoPause']
    'ElIconUserFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['UserFilled']
    'ElIconVideoPlay': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['VideoPlay']
    'ElIconView': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['View']
    'ElIconWalletFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['WalletFilled']
    'ElIconWarnTriangleFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['WarnTriangleFilled']
    'ElIconWarningFilled': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['WarningFilled']
    'ElIconWarning': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Warning']
    'ElIconWatch': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Watch']
    'ElIconWallet': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Wallet']
    'ElIconWatermelon': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Watermelon']
    'ElIconWindPower': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['WindPower']
    'ElIconSunny': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sunny']
    'ElIconZoomIn': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ZoomIn']
    'ElIconZoomOut': typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ZoomOut']
    'Icon': typeof import("../node_modules/@nuxt/icon/dist/runtime/components/index")['default']
    'NuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
      'LazyAppHeader': LazyComponent<typeof import("../components/AppHeader.vue")['default']>
    'LazyNuxtWelcome': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
    'LazyNuxtPicture': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
    'LazyElAffix': LazyComponent<typeof import("../node_modules/element-plus/es/components/affix/index")['ElAffix']>
    'LazyElAlert': LazyComponent<typeof import("../node_modules/element-plus/es/components/alert/index")['ElAlert']>
    'LazyElAnchorLink': LazyComponent<typeof import("../node_modules/element-plus/es/components/anchor/index")['ElAnchorLink']>
    'LazyElAnchor': LazyComponent<typeof import("../node_modules/element-plus/es/components/anchor/index")['ElAnchor']>
    'LazyElAside': LazyComponent<typeof import("../node_modules/element-plus/es/components/container/index")['ElAside']>
    'LazyElAutoResizer': LazyComponent<typeof import("../node_modules/element-plus/es/components/table-v2/index")['ElAutoResizer']>
    'LazyElAvatar': LazyComponent<typeof import("../node_modules/element-plus/es/components/avatar/index")['ElAvatar']>
    'LazyElAutocomplete': LazyComponent<typeof import("../node_modules/element-plus/es/components/autocomplete/index")['ElAutocomplete']>
    'LazyElBacktop': LazyComponent<typeof import("../node_modules/element-plus/es/components/backtop/index")['ElBacktop']>
    'LazyElBadge': LazyComponent<typeof import("../node_modules/element-plus/es/components/badge/index")['ElBadge']>
    'LazyElBreadcrumb': LazyComponent<typeof import("../node_modules/element-plus/es/components/breadcrumb/index")['ElBreadcrumb']>
    'LazyElBreadcrumbItem': LazyComponent<typeof import("../node_modules/element-plus/es/components/breadcrumb/index")['ElBreadcrumbItem']>
    'LazyElButton': LazyComponent<typeof import("../node_modules/element-plus/es/components/button/index")['ElButton']>
    'LazyElButtonGroup': LazyComponent<typeof import("../node_modules/element-plus/es/components/button/index")['ElButtonGroup']>
    'LazyElCalendar': LazyComponent<typeof import("../node_modules/element-plus/es/components/calendar/index")['ElCalendar']>
    'LazyElCard': LazyComponent<typeof import("../node_modules/element-plus/es/components/card/index")['ElCard']>
    'LazyElCarousel': LazyComponent<typeof import("../node_modules/element-plus/es/components/carousel/index")['ElCarousel']>
    'LazyElCarouselItem': LazyComponent<typeof import("../node_modules/element-plus/es/components/carousel/index")['ElCarouselItem']>
    'LazyElCascader': LazyComponent<typeof import("../node_modules/element-plus/es/components/cascader/index")['ElCascader']>
    'LazyElCascaderPanel': LazyComponent<typeof import("../node_modules/element-plus/es/components/cascader-panel/index")['ElCascaderPanel']>
    'LazyElCheckTag': LazyComponent<typeof import("../node_modules/element-plus/es/components/check-tag/index")['ElCheckTag']>
    'LazyElCheckbox': LazyComponent<typeof import("../node_modules/element-plus/es/components/checkbox/index")['ElCheckbox']>
    'LazyElCheckboxButton': LazyComponent<typeof import("../node_modules/element-plus/es/components/checkbox/index")['ElCheckboxButton']>
    'LazyElCheckboxGroup': LazyComponent<typeof import("../node_modules/element-plus/es/components/checkbox/index")['ElCheckboxGroup']>
    'LazyElCol': LazyComponent<typeof import("../node_modules/element-plus/es/components/col/index")['ElCol']>
    'LazyElCollapseItem': LazyComponent<typeof import("../node_modules/element-plus/es/components/collapse/index")['ElCollapseItem']>
    'LazyElCollapse': LazyComponent<typeof import("../node_modules/element-plus/es/components/collapse/index")['ElCollapse']>
    'LazyElCollapseTransition': LazyComponent<typeof import("../node_modules/element-plus/es/components/collapse-transition/index")['ElCollapseTransition']>
    'LazyElCollection': LazyComponent<typeof import("../node_modules/element-plus/es/components/collection/index")['ElCollection']>
    'LazyElColorPicker': LazyComponent<typeof import("../node_modules/element-plus/es/components/color-picker/index")['ElColorPicker']>
    'LazyElCollectionItem': LazyComponent<typeof import("../node_modules/element-plus/es/components/collection/index")['ElCollectionItem']>
    'LazyElContainer': LazyComponent<typeof import("../node_modules/element-plus/es/components/container/index")['ElContainer']>
    'LazyElCountdown': LazyComponent<typeof import("../node_modules/element-plus/es/components/countdown/index")['ElCountdown']>
    'LazyElDatePicker': LazyComponent<typeof import("../node_modules/element-plus/es/components/date-picker/index")['ElDatePicker']>
    'LazyElDescriptions': LazyComponent<typeof import("../node_modules/element-plus/es/components/descriptions/index")['ElDescriptions']>
    'LazyElDialog': LazyComponent<typeof import("../node_modules/element-plus/es/components/dialog/index")['ElDialog']>
    'LazyElDescriptionsItem': LazyComponent<typeof import("../node_modules/element-plus/es/components/descriptions/index")['ElDescriptionsItem']>
    'LazyElDrawer': LazyComponent<typeof import("../node_modules/element-plus/es/components/drawer/index")['ElDrawer']>
    'LazyElDivider': LazyComponent<typeof import("../node_modules/element-plus/es/components/divider/index")['ElDivider']>
    'LazyElDropdown': LazyComponent<typeof import("../node_modules/element-plus/es/components/dropdown/index")['ElDropdown']>
    'LazyElFooter': LazyComponent<typeof import("../node_modules/element-plus/es/components/container/index")['ElFooter']>
    'LazyElConfigProvider': LazyComponent<typeof import("../node_modules/element-plus/es/components/config-provider/index")['ElConfigProvider']>
    'LazyElDropdownItem': LazyComponent<typeof import("../node_modules/element-plus/es/components/dropdown/index")['ElDropdownItem']>
    'LazyElDropdownMenu': LazyComponent<typeof import("../node_modules/element-plus/es/components/dropdown/index")['ElDropdownMenu']>
    'LazyElEmpty': LazyComponent<typeof import("../node_modules/element-plus/es/components/empty/index")['ElEmpty']>
    'LazyElForm': LazyComponent<typeof import("../node_modules/element-plus/es/components/form/index")['ElForm']>
    'LazyElFormItem': LazyComponent<typeof import("../node_modules/element-plus/es/components/form/index")['ElFormItem']>
    'LazyElIcon': LazyComponent<typeof import("../node_modules/element-plus/es/components/icon/index")['ElIcon']>
    'LazyElImage': LazyComponent<typeof import("../node_modules/element-plus/es/components/image/index")['ElImage']>
    'LazyElImageViewer': LazyComponent<typeof import("../node_modules/element-plus/es/components/image-viewer/index")['ElImageViewer']>
    'LazyElInput': LazyComponent<typeof import("../node_modules/element-plus/es/components/input/index")['ElInput']>
    'LazyElHeader': LazyComponent<typeof import("../node_modules/element-plus/es/components/container/index")['ElHeader']>
    'LazyElInputNumber': LazyComponent<typeof import("../node_modules/element-plus/es/components/input-number/index")['ElInputNumber']>
    'LazyElInputTag': LazyComponent<typeof import("../node_modules/element-plus/es/components/input-tag/index")['ElInputTag']>
    'LazyElMain': LazyComponent<typeof import("../node_modules/element-plus/es/components/container/index")['ElMain']>
    'LazyElLink': LazyComponent<typeof import("../node_modules/element-plus/es/components/link/index")['ElLink']>
    'LazyElMenu': LazyComponent<typeof import("../node_modules/element-plus/es/components/menu/index")['ElMenu']>
    'LazyElMenuItem': LazyComponent<typeof import("../node_modules/element-plus/es/components/menu/index")['ElMenuItem']>
    'LazyElMention': LazyComponent<typeof import("../node_modules/element-plus/es/components/mention/index")['ElMention']>
    'LazyElMenuItemGroup': LazyComponent<typeof import("../node_modules/element-plus/es/components/menu/index")['ElMenuItemGroup']>
    'LazyElOption': LazyComponent<typeof import("../node_modules/element-plus/es/components/select/index")['ElOption']>
    'LazyElOverlay': LazyComponent<typeof import("../node_modules/element-plus/es/components/overlay/index")['ElOverlay']>
    'LazyElOptionGroup': LazyComponent<typeof import("../node_modules/element-plus/es/components/select/index")['ElOptionGroup']>
    'LazyElPagination': LazyComponent<typeof import("../node_modules/element-plus/es/components/pagination/index")['ElPagination']>
    'LazyElPageHeader': LazyComponent<typeof import("../node_modules/element-plus/es/components/page-header/index")['ElPageHeader']>
    'LazyElPopconfirm': LazyComponent<typeof import("../node_modules/element-plus/es/components/popconfirm/index")['ElPopconfirm']>
    'LazyElPopover': LazyComponent<typeof import("../node_modules/element-plus/es/components/popover/index")['ElPopover']>
    'LazyElPopper': LazyComponent<typeof import("../node_modules/element-plus/es/components/popper/index")['ElPopper']>
    'LazyElPopperArrow': LazyComponent<typeof import("../node_modules/element-plus/es/components/popper/index")['ElPopperArrow']>
    'LazyElPopperContent': LazyComponent<typeof import("../node_modules/element-plus/es/components/popper/index")['ElPopperContent']>
    'LazyElPopperTrigger': LazyComponent<typeof import("../node_modules/element-plus/es/components/popper/index")['ElPopperTrigger']>
    'LazyElProgress': LazyComponent<typeof import("../node_modules/element-plus/es/components/progress/index")['ElProgress']>
    'LazyElRadio': LazyComponent<typeof import("../node_modules/element-plus/es/components/radio/index")['ElRadio']>
    'LazyElRadioButton': LazyComponent<typeof import("../node_modules/element-plus/es/components/radio/index")['ElRadioButton']>
    'LazyElRadioGroup': LazyComponent<typeof import("../node_modules/element-plus/es/components/radio/index")['ElRadioGroup']>
    'LazyElRate': LazyComponent<typeof import("../node_modules/element-plus/es/components/rate/index")['ElRate']>
    'LazyElRow': LazyComponent<typeof import("../node_modules/element-plus/es/components/row/index")['ElRow']>
    'LazyElScrollbar': LazyComponent<typeof import("../node_modules/element-plus/es/components/scrollbar/index")['ElScrollbar']>
    'LazyElSegmented': LazyComponent<typeof import("../node_modules/element-plus/es/components/segmented/index")['ElSegmented']>
    'LazyElSelect': LazyComponent<typeof import("../node_modules/element-plus/es/components/select/index")['ElSelect']>
    'LazyElSelectV2': LazyComponent<typeof import("../node_modules/element-plus/es/components/select-v2/index")['ElSelectV2']>
    'LazyElSkeleton': LazyComponent<typeof import("../node_modules/element-plus/es/components/skeleton/index")['ElSkeleton']>
    'LazyElSkeletonItem': LazyComponent<typeof import("../node_modules/element-plus/es/components/skeleton/index")['ElSkeletonItem']>
    'LazyElSlider': LazyComponent<typeof import("../node_modules/element-plus/es/components/slider/index")['ElSlider']>
    'LazyElSpace': LazyComponent<typeof import("../node_modules/element-plus/es/components/space/index")['ElSpace']>
    'LazyElStatistic': LazyComponent<typeof import("../node_modules/element-plus/es/components/statistic/index")['ElStatistic']>
    'LazyElStep': LazyComponent<typeof import("../node_modules/element-plus/es/components/steps/index")['ElStep']>
    'LazyElSteps': LazyComponent<typeof import("../node_modules/element-plus/es/components/steps/index")['ElSteps']>
    'LazyElResult': LazyComponent<typeof import("../node_modules/element-plus/es/components/result/index")['ElResult']>
    'LazyElSubMenu': LazyComponent<typeof import("../node_modules/element-plus/es/components/menu/index")['ElSubMenu']>
    'LazyElSwitch': LazyComponent<typeof import("../node_modules/element-plus/es/components/switch/index")['ElSwitch']>
    'LazyElTabPane': LazyComponent<typeof import("../node_modules/element-plus/es/components/tabs/index")['ElTabPane']>
    'LazyElTable': LazyComponent<typeof import("../node_modules/element-plus/es/components/table/index")['ElTable']>
    'LazyElTableColumn': LazyComponent<typeof import("../node_modules/element-plus/es/components/table/index")['ElTableColumn']>
    'LazyElTableV2': LazyComponent<typeof import("../node_modules/element-plus/es/components/table-v2/index")['ElTableV2']>
    'LazyElTabs': LazyComponent<typeof import("../node_modules/element-plus/es/components/tabs/index")['ElTabs']>
    'LazyElTag': LazyComponent<typeof import("../node_modules/element-plus/es/components/tag/index")['ElTag']>
    'LazyElText': LazyComponent<typeof import("../node_modules/element-plus/es/components/text/index")['ElText']>
    'LazyElTimePicker': LazyComponent<typeof import("../node_modules/element-plus/es/components/time-picker/index")['ElTimePicker']>
    'LazyElTimeSelect': LazyComponent<typeof import("../node_modules/element-plus/es/components/time-select/index")['ElTimeSelect']>
    'LazyElTimeline': LazyComponent<typeof import("../node_modules/element-plus/es/components/timeline/index")['ElTimeline']>
    'LazyElTimelineItem': LazyComponent<typeof import("../node_modules/element-plus/es/components/timeline/index")['ElTimelineItem']>
    'LazyElTooltip': LazyComponent<typeof import("../node_modules/element-plus/es/components/tooltip/index")['ElTooltip']>
    'LazyElTour': LazyComponent<typeof import("../node_modules/element-plus/es/components/tour/index")['ElTour']>
    'LazyElTourStep': LazyComponent<typeof import("../node_modules/element-plus/es/components/tour/index")['ElTourStep']>
    'LazyElTransfer': LazyComponent<typeof import("../node_modules/element-plus/es/components/transfer/index")['ElTransfer']>
    'LazyElTree': LazyComponent<typeof import("../node_modules/element-plus/es/components/tree/index")['ElTree']>
    'LazyElTreeSelect': LazyComponent<typeof import("../node_modules/element-plus/es/components/tree-select/index")['ElTreeSelect']>
    'LazyElUpload': LazyComponent<typeof import("../node_modules/element-plus/es/components/upload/index")['ElUpload']>
    'LazyElTreeV2': LazyComponent<typeof import("../node_modules/element-plus/es/components/tree-v2/index")['ElTreeV2']>
    'LazyElWatermark': LazyComponent<typeof import("../node_modules/element-plus/es/components/watermark/index")['ElWatermark']>
    'LazyElIconAddLocation': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['AddLocation']>
    'LazyElIconAlarmClock': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['AlarmClock']>
    'LazyElIconAim': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Aim']>
    'LazyElIconApple': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Apple']>
    'LazyElIconArrowDown': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowDown']>
    'LazyElIconArrowDownBold': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowDownBold']>
    'LazyElIconArrowLeft': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowLeft']>
    'LazyElIconArrowLeftBold': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowLeftBold']>
    'LazyElIconArrowRight': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowRight']>
    'LazyElIconArrowRightBold': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowRightBold']>
    'LazyElIconArrowUp': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowUp']>
    'LazyElIconArrowUpBold': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowUpBold']>
    'LazyElIconAvatar': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Avatar']>
    'LazyElIconBack': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Back']>
    'LazyElIconBasketball': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Basketball']>
    'LazyElIconBaseball': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Baseball']>
    'LazyElIconBell': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Bell']>
    'LazyElIconBellFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['BellFilled']>
    'LazyElIconBicycle': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Bicycle']>
    'LazyElIconBottomLeft': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['BottomLeft']>
    'LazyElIconBottomRight': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['BottomRight']>
    'LazyElIconBottom': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Bottom']>
    'LazyElIconBox': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Box']>
    'LazyElIconBriefcase': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Briefcase']>
    'LazyElIconBowl': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Bowl']>
    'LazyElIconBurger': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Burger']>
    'LazyElIconBrush': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Brush']>
    'LazyElIconBrushFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['BrushFilled']>
    'LazyElIconCamera': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Camera']>
    'LazyElIconCalendar': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Calendar']>
    'LazyElIconCameraFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CameraFilled']>
    'LazyElIconCaretBottom': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CaretBottom']>
    'LazyElIconCaretLeft': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CaretLeft']>
    'LazyElIconCaretTop': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CaretTop']>
    'LazyElIconCaretRight': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CaretRight']>
    'LazyElIconCellphone': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Cellphone']>
    'LazyElIconChatDotRound': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatDotRound']>
    'LazyElIconChatDotSquare': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatDotSquare']>
    'LazyElIconChatLineSquare': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatLineSquare']>
    'LazyElIconChatSquare': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatSquare']>
    'LazyElIconChatLineRound': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatLineRound']>
    'LazyElIconCheck': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Check']>
    'LazyElIconChatRound': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatRound']>
    'LazyElIconChecked': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Checked']>
    'LazyElIconCherry': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Cherry']>
    'LazyElIconChicken': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Chicken']>
    'LazyElIconCircleCheck': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CircleCheck']>
    'LazyElIconChromeFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChromeFilled']>
    'LazyElIconCircleCheckFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CircleCheckFilled']>
    'LazyElIconCircleClose': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CircleClose']>
    'LazyElIconCircleCloseFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CircleCloseFilled']>
    'LazyElIconCirclePlus': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CirclePlus']>
    'LazyElIconCirclePlusFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CirclePlusFilled']>
    'LazyElIconClock': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Clock']>
    'LazyElIconClose': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Close']>
    'LazyElIconCloseBold': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CloseBold']>
    'LazyElIconCloudy': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Cloudy']>
    'LazyElIconCoffee': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Coffee']>
    'LazyElIconCoffeeCup': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CoffeeCup']>
    'LazyElIconCoin': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Coin']>
    'LazyElIconColdDrink': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ColdDrink']>
    'LazyElIconCollection': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Collection']>
    'LazyElIconCollectionTag': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CollectionTag']>
    'LazyElIconComment': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Comment']>
    'LazyElIconCompass': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Compass']>
    'LazyElIconConnection': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Connection']>
    'LazyElIconCoordinate': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Coordinate']>
    'LazyElIconCopyDocument': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CopyDocument']>
    'LazyElIconCrop': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Crop']>
    'LazyElIconCreditCard': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CreditCard']>
    'LazyElIconCpu': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Cpu']>
    'LazyElIconDArrowLeft': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DArrowLeft']>
    'LazyElIconDArrowRight': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DArrowRight']>
    'LazyElIconDataAnalysis': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DataAnalysis']>
    'LazyElIconDataBoard': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DataBoard']>
    'LazyElIconDCaret': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DCaret']>
    'LazyElIconDelete': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Delete']>
    'LazyElIconDeleteLocation': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DeleteLocation']>
    'LazyElIconDeleteFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DeleteFilled']>
    'LazyElIconDataLine': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DataLine']>
    'LazyElIconDessert': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Dessert']>
    'LazyElIconDiscount': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Discount']>
    'LazyElIconDish': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Dish']>
    'LazyElIconDishDot': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DishDot']>
    'LazyElIconDocument': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Document']>
    'LazyElIconDocumentAdd': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentAdd']>
    'LazyElIconDocumentChecked': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentChecked']>
    'LazyElIconDocumentCopy': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentCopy']>
    'LazyElIconDocumentDelete': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentDelete']>
    'LazyElIconDocumentRemove': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentRemove']>
    'LazyElIconDownload': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Download']>
    'LazyElIconDrizzling': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Drizzling']>
    'LazyElIconEdit': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Edit']>
    'LazyElIconEditPen': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['EditPen']>
    'LazyElIconEleme': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Eleme']>
    'LazyElIconElemeFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ElemeFilled']>
    'LazyElIconElementPlus': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ElementPlus']>
    'LazyElIconExpand': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Expand']>
    'LazyElIconFailed': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Failed']>
    'LazyElIconFemale': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Female']>
    'LazyElIconFiles': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Files']>
    'LazyElIconFilm': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Film']>
    'LazyElIconFilter': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Filter']>
    'LazyElIconFinished': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Finished']>
    'LazyElIconFirstAidKit': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FirstAidKit']>
    'LazyElIconFlag': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Flag']>
    'LazyElIconFold': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Fold']>
    'LazyElIconFolder': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Folder']>
    'LazyElIconFolderAdd': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderAdd']>
    'LazyElIconFolderChecked': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderChecked']>
    'LazyElIconFolderDelete': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderDelete']>
    'LazyElIconFolderOpened': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderOpened']>
    'LazyElIconFolderRemove': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderRemove']>
    'LazyElIconFood': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Food']>
    'LazyElIconFootball': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Football']>
    'LazyElIconForkSpoon': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ForkSpoon']>
    'LazyElIconFries': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Fries']>
    'LazyElIconFullScreen': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FullScreen']>
    'LazyElIconGoblet': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Goblet']>
    'LazyElIconGobletFull': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GobletFull']>
    'LazyElIconGobletSquare': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GobletSquare']>
    'LazyElIconGobletSquareFull': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GobletSquareFull']>
    'LazyElIconGoldMedal': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GoldMedal']>
    'LazyElIconGoods': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Goods']>
    'LazyElIconGrid': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Grid']>
    'LazyElIconGoodsFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GoodsFilled']>
    'LazyElIconGuide': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Guide']>
    'LazyElIconGrape': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Grape']>
    'LazyElIconHeadset': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Headset']>
    'LazyElIconHandbag': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Handbag']>
    'LazyElIconHelp': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Help']>
    'LazyElIconHelpFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['HelpFilled']>
    'LazyElIconHide': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Hide']>
    'LazyElIconHomeFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['HomeFilled']>
    'LazyElIconHotWater': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['HotWater']>
    'LazyElIconHouse': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['House']>
    'LazyElIconHistogram': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Histogram']>
    'LazyElIconIceCream': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceCream']>
    'LazyElIconIceCreamRound': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceCreamRound']>
    'LazyElIconIceDrink': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceDrink']>
    'LazyElIconIceTea': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceTea']>
    'LazyElIconInfoFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['InfoFilled']>
    'LazyElIconIphone': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Iphone']>
    'LazyElIconIceCreamSquare': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceCreamSquare']>
    'LazyElIconKey': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Key']>
    'LazyElIconKnifeFork': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['KnifeFork']>
    'LazyElIconLightning': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Lightning']>
    'LazyElIconLink': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Link']>
    'LazyElIconLocation': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Location']>
    'LazyElIconLocationFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['LocationFilled']>
    'LazyElIconLoading': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Loading']>
    'LazyElIconLock': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Lock']>
    'LazyElIconLollipop': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Lollipop']>
    'LazyElIconList': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['List']>
    'LazyElIconLocationInformation': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['LocationInformation']>
    'LazyElIconMagicStick': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MagicStick']>
    'LazyElIconMagnet': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Magnet']>
    'LazyElIconMale': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Male']>
    'LazyElIconMapLocation': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MapLocation']>
    'LazyElIconMemo': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Memo']>
    'LazyElIconManagement': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Management']>
    'LazyElIconMedal': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Medal']>
    'LazyElIconMenu': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Menu']>
    'LazyElIconMessage': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Message']>
    'LazyElIconMessageBox': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MessageBox']>
    'LazyElIconMicrophone': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Microphone']>
    'LazyElIconMic': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Mic']>
    'LazyElIconMilkTea': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MilkTea']>
    'LazyElIconMinus': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Minus']>
    'LazyElIconMonitor': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Monitor']>
    'LazyElIconMoney': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Money']>
    'LazyElIconMoon': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Moon']>
    'LazyElIconMoonNight': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MoonNight']>
    'LazyElIconMoreFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MoreFilled']>
    'LazyElIconMouse': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Mouse']>
    'LazyElIconMostlyCloudy': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MostlyCloudy']>
    'LazyElIconMore': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['More']>
    'LazyElIconMuteNotification': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MuteNotification']>
    'LazyElIconMute': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Mute']>
    'LazyElIconNotebook': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Notebook']>
    'LazyElIconMug': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Mug']>
    'LazyElIconNotification': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Notification']>
    'LazyElIconNoSmoking': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['NoSmoking']>
    'LazyElIconOfficeBuilding': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['OfficeBuilding']>
    'LazyElIconOpen': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Open']>
    'LazyElIconOperation': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Operation']>
    'LazyElIconOpportunity': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Opportunity']>
    'LazyElIconOrange': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Orange']>
    'LazyElIconPaperclip': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Paperclip']>
    'LazyElIconPartlyCloudy': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PartlyCloudy']>
    'LazyElIconPear': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Pear']>
    'LazyElIconOdometer': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Odometer']>
    'LazyElIconPhone': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Phone']>
    'LazyElIconPhoneFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PhoneFilled']>
    'LazyElIconPictureFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PictureFilled']>
    'LazyElIconPictureRounded': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PictureRounded']>
    'LazyElIconPicture': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Picture']>
    'LazyElIconPieChart': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PieChart']>
    'LazyElIconPlace': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Place']>
    'LazyElIconPlatform': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Platform']>
    'LazyElIconPlus': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Plus']>
    'LazyElIconPointer': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Pointer']>
    'LazyElIconPosition': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Position']>
    'LazyElIconPostcard': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Postcard']>
    'LazyElIconPouring': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Pouring']>
    'LazyElIconPresent': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Present']>
    'LazyElIconPriceTag': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PriceTag']>
    'LazyElIconPrinter': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Printer']>
    'LazyElIconPromotion': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Promotion']>
    'LazyElIconQuartzWatch': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['QuartzWatch']>
    'LazyElIconQuestionFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['QuestionFilled']>
    'LazyElIconRank': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Rank']>
    'LazyElIconReading': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Reading']>
    'LazyElIconReadingLamp': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ReadingLamp']>
    'LazyElIconRefresh': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Refresh']>
    'LazyElIconRefreshRight': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['RefreshRight']>
    'LazyElIconRefreshLeft': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['RefreshLeft']>
    'LazyElIconRefrigerator': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Refrigerator']>
    'LazyElIconRemove': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Remove']>
    'LazyElIconRemoveFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['RemoveFilled']>
    'LazyElIconScaleToOriginal': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ScaleToOriginal']>
    'LazyElIconRight': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Right']>
    'LazyElIconScissor': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Scissor']>
    'LazyElIconSearch': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Search']>
    'LazyElIconSelect': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Select']>
    'LazyElIconSchool': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['School']>
    'LazyElIconSell': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sell']>
    'LazyElIconService': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Service']>
    'LazyElIconSetUp': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SetUp']>
    'LazyElIconSetting': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Setting']>
    'LazyElIconShare': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Share']>
    'LazyElIconShip': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Ship']>
    'LazyElIconShop': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Shop']>
    'LazyElIconShoppingBag': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ShoppingBag']>
    'LazyElIconSoccer': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Soccer']>
    'LazyElIconShoppingCart': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ShoppingCart']>
    'LazyElIconSmoking': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Smoking']>
    'LazyElIconShoppingTrolley': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ShoppingTrolley']>
    'LazyElIconShoppingCartFull': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ShoppingCartFull']>
    'LazyElIconSort': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sort']>
    'LazyElIconSemiSelect': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SemiSelect']>
    'LazyElIconSortDown': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SortDown']>
    'LazyElIconStamp': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Stamp']>
    'LazyElIconSortUp': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SortUp']>
    'LazyElIconStar': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Star']>
    'LazyElIconStarFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['StarFilled']>
    'LazyElIconStopwatch': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Stopwatch']>
    'LazyElIconSugar': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sugar']>
    'LazyElIconSoldOut': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SoldOut']>
    'LazyElIconSuccessFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SuccessFilled']>
    'LazyElIconSuitcase': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Suitcase']>
    'LazyElIconSuitcaseLine': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SuitcaseLine']>
    'LazyElIconSunset': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sunset']>
    'LazyElIconSwitch': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Switch']>
    'LazyElIconSwitchButton': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SwitchButton']>
    'LazyElIconTakeawayBox': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TakeawayBox']>
    'LazyElIconSwitchFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SwitchFilled']>
    'LazyElIconTicket': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Ticket']>
    'LazyElIconTimer': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Timer']>
    'LazyElIconTickets': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Tickets']>
    'LazyElIconToiletPaper': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ToiletPaper']>
    'LazyElIconTools': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Tools']>
    'LazyElIconTop': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Top']>
    'LazyElIconTopLeft': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TopLeft']>
    'LazyElIconTrendCharts': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TrendCharts']>
    'LazyElIconTrophy': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Trophy']>
    'LazyElIconTrophyBase': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TrophyBase']>
    'LazyElIconSunrise': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sunrise']>
    'LazyElIconTurnOff': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TurnOff']>
    'LazyElIconUnlock': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Unlock']>
    'LazyElIconUpload': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Upload']>
    'LazyElIconTopRight': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TopRight']>
    'LazyElIconUmbrella': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Umbrella']>
    'LazyElIconUploadFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['UploadFilled']>
    'LazyElIconUser': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['User']>
    'LazyElIconVan': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Van']>
    'LazyElIconVideoCameraFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['VideoCameraFilled']>
    'LazyElIconVideoCamera': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['VideoCamera']>
    'LazyElIconVideoPause': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['VideoPause']>
    'LazyElIconUserFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['UserFilled']>
    'LazyElIconVideoPlay': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['VideoPlay']>
    'LazyElIconView': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['View']>
    'LazyElIconWalletFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['WalletFilled']>
    'LazyElIconWarnTriangleFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['WarnTriangleFilled']>
    'LazyElIconWarningFilled': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['WarningFilled']>
    'LazyElIconWarning': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Warning']>
    'LazyElIconWatch': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Watch']>
    'LazyElIconWallet': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Wallet']>
    'LazyElIconWatermelon': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Watermelon']>
    'LazyElIconWindPower': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['WindPower']>
    'LazyElIconSunny': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sunny']>
    'LazyElIconZoomIn': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ZoomIn']>
    'LazyElIconZoomOut': LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ZoomOut']>
    'LazyIcon': LazyComponent<typeof import("../node_modules/@nuxt/icon/dist/runtime/components/index")['default']>
    'LazyNuxtPage': LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
    'LazyNoScript': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const AppHeader: typeof import("../components/AppHeader.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const ElAffix: typeof import("../node_modules/element-plus/es/components/affix/index")['ElAffix']
export const ElAlert: typeof import("../node_modules/element-plus/es/components/alert/index")['ElAlert']
export const ElAnchorLink: typeof import("../node_modules/element-plus/es/components/anchor/index")['ElAnchorLink']
export const ElAnchor: typeof import("../node_modules/element-plus/es/components/anchor/index")['ElAnchor']
export const ElAside: typeof import("../node_modules/element-plus/es/components/container/index")['ElAside']
export const ElAutoResizer: typeof import("../node_modules/element-plus/es/components/table-v2/index")['ElAutoResizer']
export const ElAvatar: typeof import("../node_modules/element-plus/es/components/avatar/index")['ElAvatar']
export const ElAutocomplete: typeof import("../node_modules/element-plus/es/components/autocomplete/index")['ElAutocomplete']
export const ElBacktop: typeof import("../node_modules/element-plus/es/components/backtop/index")['ElBacktop']
export const ElBadge: typeof import("../node_modules/element-plus/es/components/badge/index")['ElBadge']
export const ElBreadcrumb: typeof import("../node_modules/element-plus/es/components/breadcrumb/index")['ElBreadcrumb']
export const ElBreadcrumbItem: typeof import("../node_modules/element-plus/es/components/breadcrumb/index")['ElBreadcrumbItem']
export const ElButton: typeof import("../node_modules/element-plus/es/components/button/index")['ElButton']
export const ElButtonGroup: typeof import("../node_modules/element-plus/es/components/button/index")['ElButtonGroup']
export const ElCalendar: typeof import("../node_modules/element-plus/es/components/calendar/index")['ElCalendar']
export const ElCard: typeof import("../node_modules/element-plus/es/components/card/index")['ElCard']
export const ElCarousel: typeof import("../node_modules/element-plus/es/components/carousel/index")['ElCarousel']
export const ElCarouselItem: typeof import("../node_modules/element-plus/es/components/carousel/index")['ElCarouselItem']
export const ElCascader: typeof import("../node_modules/element-plus/es/components/cascader/index")['ElCascader']
export const ElCascaderPanel: typeof import("../node_modules/element-plus/es/components/cascader-panel/index")['ElCascaderPanel']
export const ElCheckTag: typeof import("../node_modules/element-plus/es/components/check-tag/index")['ElCheckTag']
export const ElCheckbox: typeof import("../node_modules/element-plus/es/components/checkbox/index")['ElCheckbox']
export const ElCheckboxButton: typeof import("../node_modules/element-plus/es/components/checkbox/index")['ElCheckboxButton']
export const ElCheckboxGroup: typeof import("../node_modules/element-plus/es/components/checkbox/index")['ElCheckboxGroup']
export const ElCol: typeof import("../node_modules/element-plus/es/components/col/index")['ElCol']
export const ElCollapseItem: typeof import("../node_modules/element-plus/es/components/collapse/index")['ElCollapseItem']
export const ElCollapse: typeof import("../node_modules/element-plus/es/components/collapse/index")['ElCollapse']
export const ElCollapseTransition: typeof import("../node_modules/element-plus/es/components/collapse-transition/index")['ElCollapseTransition']
export const ElCollection: typeof import("../node_modules/element-plus/es/components/collection/index")['ElCollection']
export const ElColorPicker: typeof import("../node_modules/element-plus/es/components/color-picker/index")['ElColorPicker']
export const ElCollectionItem: typeof import("../node_modules/element-plus/es/components/collection/index")['ElCollectionItem']
export const ElContainer: typeof import("../node_modules/element-plus/es/components/container/index")['ElContainer']
export const ElCountdown: typeof import("../node_modules/element-plus/es/components/countdown/index")['ElCountdown']
export const ElDatePicker: typeof import("../node_modules/element-plus/es/components/date-picker/index")['ElDatePicker']
export const ElDescriptions: typeof import("../node_modules/element-plus/es/components/descriptions/index")['ElDescriptions']
export const ElDialog: typeof import("../node_modules/element-plus/es/components/dialog/index")['ElDialog']
export const ElDescriptionsItem: typeof import("../node_modules/element-plus/es/components/descriptions/index")['ElDescriptionsItem']
export const ElDrawer: typeof import("../node_modules/element-plus/es/components/drawer/index")['ElDrawer']
export const ElDivider: typeof import("../node_modules/element-plus/es/components/divider/index")['ElDivider']
export const ElDropdown: typeof import("../node_modules/element-plus/es/components/dropdown/index")['ElDropdown']
export const ElFooter: typeof import("../node_modules/element-plus/es/components/container/index")['ElFooter']
export const ElConfigProvider: typeof import("../node_modules/element-plus/es/components/config-provider/index")['ElConfigProvider']
export const ElDropdownItem: typeof import("../node_modules/element-plus/es/components/dropdown/index")['ElDropdownItem']
export const ElDropdownMenu: typeof import("../node_modules/element-plus/es/components/dropdown/index")['ElDropdownMenu']
export const ElEmpty: typeof import("../node_modules/element-plus/es/components/empty/index")['ElEmpty']
export const ElForm: typeof import("../node_modules/element-plus/es/components/form/index")['ElForm']
export const ElFormItem: typeof import("../node_modules/element-plus/es/components/form/index")['ElFormItem']
export const ElIcon: typeof import("../node_modules/element-plus/es/components/icon/index")['ElIcon']
export const ElImage: typeof import("../node_modules/element-plus/es/components/image/index")['ElImage']
export const ElImageViewer: typeof import("../node_modules/element-plus/es/components/image-viewer/index")['ElImageViewer']
export const ElInput: typeof import("../node_modules/element-plus/es/components/input/index")['ElInput']
export const ElHeader: typeof import("../node_modules/element-plus/es/components/container/index")['ElHeader']
export const ElInputNumber: typeof import("../node_modules/element-plus/es/components/input-number/index")['ElInputNumber']
export const ElInputTag: typeof import("../node_modules/element-plus/es/components/input-tag/index")['ElInputTag']
export const ElMain: typeof import("../node_modules/element-plus/es/components/container/index")['ElMain']
export const ElLink: typeof import("../node_modules/element-plus/es/components/link/index")['ElLink']
export const ElMenu: typeof import("../node_modules/element-plus/es/components/menu/index")['ElMenu']
export const ElMenuItem: typeof import("../node_modules/element-plus/es/components/menu/index")['ElMenuItem']
export const ElMention: typeof import("../node_modules/element-plus/es/components/mention/index")['ElMention']
export const ElMenuItemGroup: typeof import("../node_modules/element-plus/es/components/menu/index")['ElMenuItemGroup']
export const ElOption: typeof import("../node_modules/element-plus/es/components/select/index")['ElOption']
export const ElOverlay: typeof import("../node_modules/element-plus/es/components/overlay/index")['ElOverlay']
export const ElOptionGroup: typeof import("../node_modules/element-plus/es/components/select/index")['ElOptionGroup']
export const ElPagination: typeof import("../node_modules/element-plus/es/components/pagination/index")['ElPagination']
export const ElPageHeader: typeof import("../node_modules/element-plus/es/components/page-header/index")['ElPageHeader']
export const ElPopconfirm: typeof import("../node_modules/element-plus/es/components/popconfirm/index")['ElPopconfirm']
export const ElPopover: typeof import("../node_modules/element-plus/es/components/popover/index")['ElPopover']
export const ElPopper: typeof import("../node_modules/element-plus/es/components/popper/index")['ElPopper']
export const ElPopperArrow: typeof import("../node_modules/element-plus/es/components/popper/index")['ElPopperArrow']
export const ElPopperContent: typeof import("../node_modules/element-plus/es/components/popper/index")['ElPopperContent']
export const ElPopperTrigger: typeof import("../node_modules/element-plus/es/components/popper/index")['ElPopperTrigger']
export const ElProgress: typeof import("../node_modules/element-plus/es/components/progress/index")['ElProgress']
export const ElRadio: typeof import("../node_modules/element-plus/es/components/radio/index")['ElRadio']
export const ElRadioButton: typeof import("../node_modules/element-plus/es/components/radio/index")['ElRadioButton']
export const ElRadioGroup: typeof import("../node_modules/element-plus/es/components/radio/index")['ElRadioGroup']
export const ElRate: typeof import("../node_modules/element-plus/es/components/rate/index")['ElRate']
export const ElRow: typeof import("../node_modules/element-plus/es/components/row/index")['ElRow']
export const ElScrollbar: typeof import("../node_modules/element-plus/es/components/scrollbar/index")['ElScrollbar']
export const ElSegmented: typeof import("../node_modules/element-plus/es/components/segmented/index")['ElSegmented']
export const ElSelect: typeof import("../node_modules/element-plus/es/components/select/index")['ElSelect']
export const ElSelectV2: typeof import("../node_modules/element-plus/es/components/select-v2/index")['ElSelectV2']
export const ElSkeleton: typeof import("../node_modules/element-plus/es/components/skeleton/index")['ElSkeleton']
export const ElSkeletonItem: typeof import("../node_modules/element-plus/es/components/skeleton/index")['ElSkeletonItem']
export const ElSlider: typeof import("../node_modules/element-plus/es/components/slider/index")['ElSlider']
export const ElSpace: typeof import("../node_modules/element-plus/es/components/space/index")['ElSpace']
export const ElStatistic: typeof import("../node_modules/element-plus/es/components/statistic/index")['ElStatistic']
export const ElStep: typeof import("../node_modules/element-plus/es/components/steps/index")['ElStep']
export const ElSteps: typeof import("../node_modules/element-plus/es/components/steps/index")['ElSteps']
export const ElResult: typeof import("../node_modules/element-plus/es/components/result/index")['ElResult']
export const ElSubMenu: typeof import("../node_modules/element-plus/es/components/menu/index")['ElSubMenu']
export const ElSwitch: typeof import("../node_modules/element-plus/es/components/switch/index")['ElSwitch']
export const ElTabPane: typeof import("../node_modules/element-plus/es/components/tabs/index")['ElTabPane']
export const ElTable: typeof import("../node_modules/element-plus/es/components/table/index")['ElTable']
export const ElTableColumn: typeof import("../node_modules/element-plus/es/components/table/index")['ElTableColumn']
export const ElTableV2: typeof import("../node_modules/element-plus/es/components/table-v2/index")['ElTableV2']
export const ElTabs: typeof import("../node_modules/element-plus/es/components/tabs/index")['ElTabs']
export const ElTag: typeof import("../node_modules/element-plus/es/components/tag/index")['ElTag']
export const ElText: typeof import("../node_modules/element-plus/es/components/text/index")['ElText']
export const ElTimePicker: typeof import("../node_modules/element-plus/es/components/time-picker/index")['ElTimePicker']
export const ElTimeSelect: typeof import("../node_modules/element-plus/es/components/time-select/index")['ElTimeSelect']
export const ElTimeline: typeof import("../node_modules/element-plus/es/components/timeline/index")['ElTimeline']
export const ElTimelineItem: typeof import("../node_modules/element-plus/es/components/timeline/index")['ElTimelineItem']
export const ElTooltip: typeof import("../node_modules/element-plus/es/components/tooltip/index")['ElTooltip']
export const ElTour: typeof import("../node_modules/element-plus/es/components/tour/index")['ElTour']
export const ElTourStep: typeof import("../node_modules/element-plus/es/components/tour/index")['ElTourStep']
export const ElTransfer: typeof import("../node_modules/element-plus/es/components/transfer/index")['ElTransfer']
export const ElTree: typeof import("../node_modules/element-plus/es/components/tree/index")['ElTree']
export const ElTreeSelect: typeof import("../node_modules/element-plus/es/components/tree-select/index")['ElTreeSelect']
export const ElUpload: typeof import("../node_modules/element-plus/es/components/upload/index")['ElUpload']
export const ElTreeV2: typeof import("../node_modules/element-plus/es/components/tree-v2/index")['ElTreeV2']
export const ElWatermark: typeof import("../node_modules/element-plus/es/components/watermark/index")['ElWatermark']
export const ElIconAddLocation: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['AddLocation']
export const ElIconAlarmClock: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['AlarmClock']
export const ElIconAim: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Aim']
export const ElIconApple: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Apple']
export const ElIconArrowDown: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowDown']
export const ElIconArrowDownBold: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowDownBold']
export const ElIconArrowLeft: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowLeft']
export const ElIconArrowLeftBold: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowLeftBold']
export const ElIconArrowRight: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowRight']
export const ElIconArrowRightBold: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowRightBold']
export const ElIconArrowUp: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowUp']
export const ElIconArrowUpBold: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowUpBold']
export const ElIconAvatar: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Avatar']
export const ElIconBack: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Back']
export const ElIconBasketball: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Basketball']
export const ElIconBaseball: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Baseball']
export const ElIconBell: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Bell']
export const ElIconBellFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['BellFilled']
export const ElIconBicycle: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Bicycle']
export const ElIconBottomLeft: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['BottomLeft']
export const ElIconBottomRight: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['BottomRight']
export const ElIconBottom: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Bottom']
export const ElIconBox: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Box']
export const ElIconBriefcase: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Briefcase']
export const ElIconBowl: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Bowl']
export const ElIconBurger: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Burger']
export const ElIconBrush: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Brush']
export const ElIconBrushFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['BrushFilled']
export const ElIconCamera: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Camera']
export const ElIconCalendar: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Calendar']
export const ElIconCameraFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CameraFilled']
export const ElIconCaretBottom: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CaretBottom']
export const ElIconCaretLeft: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CaretLeft']
export const ElIconCaretTop: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CaretTop']
export const ElIconCaretRight: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CaretRight']
export const ElIconCellphone: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Cellphone']
export const ElIconChatDotRound: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatDotRound']
export const ElIconChatDotSquare: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatDotSquare']
export const ElIconChatLineSquare: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatLineSquare']
export const ElIconChatSquare: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatSquare']
export const ElIconChatLineRound: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatLineRound']
export const ElIconCheck: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Check']
export const ElIconChatRound: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatRound']
export const ElIconChecked: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Checked']
export const ElIconCherry: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Cherry']
export const ElIconChicken: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Chicken']
export const ElIconCircleCheck: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CircleCheck']
export const ElIconChromeFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChromeFilled']
export const ElIconCircleCheckFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CircleCheckFilled']
export const ElIconCircleClose: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CircleClose']
export const ElIconCircleCloseFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CircleCloseFilled']
export const ElIconCirclePlus: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CirclePlus']
export const ElIconCirclePlusFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CirclePlusFilled']
export const ElIconClock: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Clock']
export const ElIconClose: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Close']
export const ElIconCloseBold: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CloseBold']
export const ElIconCloudy: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Cloudy']
export const ElIconCoffee: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Coffee']
export const ElIconCoffeeCup: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CoffeeCup']
export const ElIconCoin: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Coin']
export const ElIconColdDrink: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ColdDrink']
export const ElIconCollection: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Collection']
export const ElIconCollectionTag: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CollectionTag']
export const ElIconComment: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Comment']
export const ElIconCompass: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Compass']
export const ElIconConnection: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Connection']
export const ElIconCoordinate: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Coordinate']
export const ElIconCopyDocument: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CopyDocument']
export const ElIconCrop: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Crop']
export const ElIconCreditCard: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CreditCard']
export const ElIconCpu: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Cpu']
export const ElIconDArrowLeft: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DArrowLeft']
export const ElIconDArrowRight: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DArrowRight']
export const ElIconDataAnalysis: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DataAnalysis']
export const ElIconDataBoard: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DataBoard']
export const ElIconDCaret: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DCaret']
export const ElIconDelete: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Delete']
export const ElIconDeleteLocation: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DeleteLocation']
export const ElIconDeleteFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DeleteFilled']
export const ElIconDataLine: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DataLine']
export const ElIconDessert: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Dessert']
export const ElIconDiscount: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Discount']
export const ElIconDish: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Dish']
export const ElIconDishDot: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DishDot']
export const ElIconDocument: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Document']
export const ElIconDocumentAdd: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentAdd']
export const ElIconDocumentChecked: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentChecked']
export const ElIconDocumentCopy: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentCopy']
export const ElIconDocumentDelete: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentDelete']
export const ElIconDocumentRemove: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentRemove']
export const ElIconDownload: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Download']
export const ElIconDrizzling: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Drizzling']
export const ElIconEdit: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Edit']
export const ElIconEditPen: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['EditPen']
export const ElIconEleme: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Eleme']
export const ElIconElemeFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ElemeFilled']
export const ElIconElementPlus: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ElementPlus']
export const ElIconExpand: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Expand']
export const ElIconFailed: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Failed']
export const ElIconFemale: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Female']
export const ElIconFiles: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Files']
export const ElIconFilm: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Film']
export const ElIconFilter: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Filter']
export const ElIconFinished: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Finished']
export const ElIconFirstAidKit: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FirstAidKit']
export const ElIconFlag: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Flag']
export const ElIconFold: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Fold']
export const ElIconFolder: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Folder']
export const ElIconFolderAdd: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderAdd']
export const ElIconFolderChecked: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderChecked']
export const ElIconFolderDelete: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderDelete']
export const ElIconFolderOpened: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderOpened']
export const ElIconFolderRemove: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderRemove']
export const ElIconFood: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Food']
export const ElIconFootball: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Football']
export const ElIconForkSpoon: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ForkSpoon']
export const ElIconFries: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Fries']
export const ElIconFullScreen: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FullScreen']
export const ElIconGoblet: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Goblet']
export const ElIconGobletFull: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GobletFull']
export const ElIconGobletSquare: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GobletSquare']
export const ElIconGobletSquareFull: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GobletSquareFull']
export const ElIconGoldMedal: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GoldMedal']
export const ElIconGoods: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Goods']
export const ElIconGrid: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Grid']
export const ElIconGoodsFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GoodsFilled']
export const ElIconGuide: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Guide']
export const ElIconGrape: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Grape']
export const ElIconHeadset: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Headset']
export const ElIconHandbag: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Handbag']
export const ElIconHelp: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Help']
export const ElIconHelpFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['HelpFilled']
export const ElIconHide: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Hide']
export const ElIconHomeFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['HomeFilled']
export const ElIconHotWater: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['HotWater']
export const ElIconHouse: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['House']
export const ElIconHistogram: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Histogram']
export const ElIconIceCream: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceCream']
export const ElIconIceCreamRound: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceCreamRound']
export const ElIconIceDrink: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceDrink']
export const ElIconIceTea: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceTea']
export const ElIconInfoFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['InfoFilled']
export const ElIconIphone: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Iphone']
export const ElIconIceCreamSquare: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceCreamSquare']
export const ElIconKey: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Key']
export const ElIconKnifeFork: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['KnifeFork']
export const ElIconLightning: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Lightning']
export const ElIconLink: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Link']
export const ElIconLocation: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Location']
export const ElIconLocationFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['LocationFilled']
export const ElIconLoading: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Loading']
export const ElIconLock: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Lock']
export const ElIconLollipop: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Lollipop']
export const ElIconList: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['List']
export const ElIconLocationInformation: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['LocationInformation']
export const ElIconMagicStick: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MagicStick']
export const ElIconMagnet: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Magnet']
export const ElIconMale: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Male']
export const ElIconMapLocation: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MapLocation']
export const ElIconMemo: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Memo']
export const ElIconManagement: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Management']
export const ElIconMedal: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Medal']
export const ElIconMenu: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Menu']
export const ElIconMessage: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Message']
export const ElIconMessageBox: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MessageBox']
export const ElIconMicrophone: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Microphone']
export const ElIconMic: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Mic']
export const ElIconMilkTea: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MilkTea']
export const ElIconMinus: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Minus']
export const ElIconMonitor: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Monitor']
export const ElIconMoney: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Money']
export const ElIconMoon: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Moon']
export const ElIconMoonNight: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MoonNight']
export const ElIconMoreFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MoreFilled']
export const ElIconMouse: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Mouse']
export const ElIconMostlyCloudy: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MostlyCloudy']
export const ElIconMore: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['More']
export const ElIconMuteNotification: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MuteNotification']
export const ElIconMute: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Mute']
export const ElIconNotebook: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Notebook']
export const ElIconMug: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Mug']
export const ElIconNotification: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Notification']
export const ElIconNoSmoking: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['NoSmoking']
export const ElIconOfficeBuilding: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['OfficeBuilding']
export const ElIconOpen: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Open']
export const ElIconOperation: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Operation']
export const ElIconOpportunity: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Opportunity']
export const ElIconOrange: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Orange']
export const ElIconPaperclip: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Paperclip']
export const ElIconPartlyCloudy: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PartlyCloudy']
export const ElIconPear: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Pear']
export const ElIconOdometer: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Odometer']
export const ElIconPhone: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Phone']
export const ElIconPhoneFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PhoneFilled']
export const ElIconPictureFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PictureFilled']
export const ElIconPictureRounded: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PictureRounded']
export const ElIconPicture: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Picture']
export const ElIconPieChart: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PieChart']
export const ElIconPlace: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Place']
export const ElIconPlatform: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Platform']
export const ElIconPlus: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Plus']
export const ElIconPointer: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Pointer']
export const ElIconPosition: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Position']
export const ElIconPostcard: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Postcard']
export const ElIconPouring: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Pouring']
export const ElIconPresent: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Present']
export const ElIconPriceTag: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PriceTag']
export const ElIconPrinter: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Printer']
export const ElIconPromotion: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Promotion']
export const ElIconQuartzWatch: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['QuartzWatch']
export const ElIconQuestionFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['QuestionFilled']
export const ElIconRank: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Rank']
export const ElIconReading: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Reading']
export const ElIconReadingLamp: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ReadingLamp']
export const ElIconRefresh: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Refresh']
export const ElIconRefreshRight: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['RefreshRight']
export const ElIconRefreshLeft: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['RefreshLeft']
export const ElIconRefrigerator: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Refrigerator']
export const ElIconRemove: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Remove']
export const ElIconRemoveFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['RemoveFilled']
export const ElIconScaleToOriginal: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ScaleToOriginal']
export const ElIconRight: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Right']
export const ElIconScissor: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Scissor']
export const ElIconSearch: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Search']
export const ElIconSelect: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Select']
export const ElIconSchool: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['School']
export const ElIconSell: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sell']
export const ElIconService: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Service']
export const ElIconSetUp: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SetUp']
export const ElIconSetting: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Setting']
export const ElIconShare: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Share']
export const ElIconShip: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Ship']
export const ElIconShop: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Shop']
export const ElIconShoppingBag: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ShoppingBag']
export const ElIconSoccer: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Soccer']
export const ElIconShoppingCart: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ShoppingCart']
export const ElIconSmoking: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Smoking']
export const ElIconShoppingTrolley: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ShoppingTrolley']
export const ElIconShoppingCartFull: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ShoppingCartFull']
export const ElIconSort: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sort']
export const ElIconSemiSelect: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SemiSelect']
export const ElIconSortDown: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SortDown']
export const ElIconStamp: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Stamp']
export const ElIconSortUp: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SortUp']
export const ElIconStar: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Star']
export const ElIconStarFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['StarFilled']
export const ElIconStopwatch: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Stopwatch']
export const ElIconSugar: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sugar']
export const ElIconSoldOut: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SoldOut']
export const ElIconSuccessFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SuccessFilled']
export const ElIconSuitcase: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Suitcase']
export const ElIconSuitcaseLine: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SuitcaseLine']
export const ElIconSunset: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sunset']
export const ElIconSwitch: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Switch']
export const ElIconSwitchButton: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SwitchButton']
export const ElIconTakeawayBox: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TakeawayBox']
export const ElIconSwitchFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SwitchFilled']
export const ElIconTicket: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Ticket']
export const ElIconTimer: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Timer']
export const ElIconTickets: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Tickets']
export const ElIconToiletPaper: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ToiletPaper']
export const ElIconTools: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Tools']
export const ElIconTop: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Top']
export const ElIconTopLeft: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TopLeft']
export const ElIconTrendCharts: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TrendCharts']
export const ElIconTrophy: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Trophy']
export const ElIconTrophyBase: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TrophyBase']
export const ElIconSunrise: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sunrise']
export const ElIconTurnOff: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TurnOff']
export const ElIconUnlock: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Unlock']
export const ElIconUpload: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Upload']
export const ElIconTopRight: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TopRight']
export const ElIconUmbrella: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Umbrella']
export const ElIconUploadFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['UploadFilled']
export const ElIconUser: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['User']
export const ElIconVan: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Van']
export const ElIconVideoCameraFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['VideoCameraFilled']
export const ElIconVideoCamera: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['VideoCamera']
export const ElIconVideoPause: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['VideoPause']
export const ElIconUserFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['UserFilled']
export const ElIconVideoPlay: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['VideoPlay']
export const ElIconView: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['View']
export const ElIconWalletFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['WalletFilled']
export const ElIconWarnTriangleFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['WarnTriangleFilled']
export const ElIconWarningFilled: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['WarningFilled']
export const ElIconWarning: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Warning']
export const ElIconWatch: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Watch']
export const ElIconWallet: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Wallet']
export const ElIconWatermelon: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Watermelon']
export const ElIconWindPower: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['WindPower']
export const ElIconSunny: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sunny']
export const ElIconZoomIn: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ZoomIn']
export const ElIconZoomOut: typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ZoomOut']
export const Icon: typeof import("../node_modules/@nuxt/icon/dist/runtime/components/index")['default']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyAppHeader: LazyComponent<typeof import("../components/AppHeader.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyElAffix: LazyComponent<typeof import("../node_modules/element-plus/es/components/affix/index")['ElAffix']>
export const LazyElAlert: LazyComponent<typeof import("../node_modules/element-plus/es/components/alert/index")['ElAlert']>
export const LazyElAnchorLink: LazyComponent<typeof import("../node_modules/element-plus/es/components/anchor/index")['ElAnchorLink']>
export const LazyElAnchor: LazyComponent<typeof import("../node_modules/element-plus/es/components/anchor/index")['ElAnchor']>
export const LazyElAside: LazyComponent<typeof import("../node_modules/element-plus/es/components/container/index")['ElAside']>
export const LazyElAutoResizer: LazyComponent<typeof import("../node_modules/element-plus/es/components/table-v2/index")['ElAutoResizer']>
export const LazyElAvatar: LazyComponent<typeof import("../node_modules/element-plus/es/components/avatar/index")['ElAvatar']>
export const LazyElAutocomplete: LazyComponent<typeof import("../node_modules/element-plus/es/components/autocomplete/index")['ElAutocomplete']>
export const LazyElBacktop: LazyComponent<typeof import("../node_modules/element-plus/es/components/backtop/index")['ElBacktop']>
export const LazyElBadge: LazyComponent<typeof import("../node_modules/element-plus/es/components/badge/index")['ElBadge']>
export const LazyElBreadcrumb: LazyComponent<typeof import("../node_modules/element-plus/es/components/breadcrumb/index")['ElBreadcrumb']>
export const LazyElBreadcrumbItem: LazyComponent<typeof import("../node_modules/element-plus/es/components/breadcrumb/index")['ElBreadcrumbItem']>
export const LazyElButton: LazyComponent<typeof import("../node_modules/element-plus/es/components/button/index")['ElButton']>
export const LazyElButtonGroup: LazyComponent<typeof import("../node_modules/element-plus/es/components/button/index")['ElButtonGroup']>
export const LazyElCalendar: LazyComponent<typeof import("../node_modules/element-plus/es/components/calendar/index")['ElCalendar']>
export const LazyElCard: LazyComponent<typeof import("../node_modules/element-plus/es/components/card/index")['ElCard']>
export const LazyElCarousel: LazyComponent<typeof import("../node_modules/element-plus/es/components/carousel/index")['ElCarousel']>
export const LazyElCarouselItem: LazyComponent<typeof import("../node_modules/element-plus/es/components/carousel/index")['ElCarouselItem']>
export const LazyElCascader: LazyComponent<typeof import("../node_modules/element-plus/es/components/cascader/index")['ElCascader']>
export const LazyElCascaderPanel: LazyComponent<typeof import("../node_modules/element-plus/es/components/cascader-panel/index")['ElCascaderPanel']>
export const LazyElCheckTag: LazyComponent<typeof import("../node_modules/element-plus/es/components/check-tag/index")['ElCheckTag']>
export const LazyElCheckbox: LazyComponent<typeof import("../node_modules/element-plus/es/components/checkbox/index")['ElCheckbox']>
export const LazyElCheckboxButton: LazyComponent<typeof import("../node_modules/element-plus/es/components/checkbox/index")['ElCheckboxButton']>
export const LazyElCheckboxGroup: LazyComponent<typeof import("../node_modules/element-plus/es/components/checkbox/index")['ElCheckboxGroup']>
export const LazyElCol: LazyComponent<typeof import("../node_modules/element-plus/es/components/col/index")['ElCol']>
export const LazyElCollapseItem: LazyComponent<typeof import("../node_modules/element-plus/es/components/collapse/index")['ElCollapseItem']>
export const LazyElCollapse: LazyComponent<typeof import("../node_modules/element-plus/es/components/collapse/index")['ElCollapse']>
export const LazyElCollapseTransition: LazyComponent<typeof import("../node_modules/element-plus/es/components/collapse-transition/index")['ElCollapseTransition']>
export const LazyElCollection: LazyComponent<typeof import("../node_modules/element-plus/es/components/collection/index")['ElCollection']>
export const LazyElColorPicker: LazyComponent<typeof import("../node_modules/element-plus/es/components/color-picker/index")['ElColorPicker']>
export const LazyElCollectionItem: LazyComponent<typeof import("../node_modules/element-plus/es/components/collection/index")['ElCollectionItem']>
export const LazyElContainer: LazyComponent<typeof import("../node_modules/element-plus/es/components/container/index")['ElContainer']>
export const LazyElCountdown: LazyComponent<typeof import("../node_modules/element-plus/es/components/countdown/index")['ElCountdown']>
export const LazyElDatePicker: LazyComponent<typeof import("../node_modules/element-plus/es/components/date-picker/index")['ElDatePicker']>
export const LazyElDescriptions: LazyComponent<typeof import("../node_modules/element-plus/es/components/descriptions/index")['ElDescriptions']>
export const LazyElDialog: LazyComponent<typeof import("../node_modules/element-plus/es/components/dialog/index")['ElDialog']>
export const LazyElDescriptionsItem: LazyComponent<typeof import("../node_modules/element-plus/es/components/descriptions/index")['ElDescriptionsItem']>
export const LazyElDrawer: LazyComponent<typeof import("../node_modules/element-plus/es/components/drawer/index")['ElDrawer']>
export const LazyElDivider: LazyComponent<typeof import("../node_modules/element-plus/es/components/divider/index")['ElDivider']>
export const LazyElDropdown: LazyComponent<typeof import("../node_modules/element-plus/es/components/dropdown/index")['ElDropdown']>
export const LazyElFooter: LazyComponent<typeof import("../node_modules/element-plus/es/components/container/index")['ElFooter']>
export const LazyElConfigProvider: LazyComponent<typeof import("../node_modules/element-plus/es/components/config-provider/index")['ElConfigProvider']>
export const LazyElDropdownItem: LazyComponent<typeof import("../node_modules/element-plus/es/components/dropdown/index")['ElDropdownItem']>
export const LazyElDropdownMenu: LazyComponent<typeof import("../node_modules/element-plus/es/components/dropdown/index")['ElDropdownMenu']>
export const LazyElEmpty: LazyComponent<typeof import("../node_modules/element-plus/es/components/empty/index")['ElEmpty']>
export const LazyElForm: LazyComponent<typeof import("../node_modules/element-plus/es/components/form/index")['ElForm']>
export const LazyElFormItem: LazyComponent<typeof import("../node_modules/element-plus/es/components/form/index")['ElFormItem']>
export const LazyElIcon: LazyComponent<typeof import("../node_modules/element-plus/es/components/icon/index")['ElIcon']>
export const LazyElImage: LazyComponent<typeof import("../node_modules/element-plus/es/components/image/index")['ElImage']>
export const LazyElImageViewer: LazyComponent<typeof import("../node_modules/element-plus/es/components/image-viewer/index")['ElImageViewer']>
export const LazyElInput: LazyComponent<typeof import("../node_modules/element-plus/es/components/input/index")['ElInput']>
export const LazyElHeader: LazyComponent<typeof import("../node_modules/element-plus/es/components/container/index")['ElHeader']>
export const LazyElInputNumber: LazyComponent<typeof import("../node_modules/element-plus/es/components/input-number/index")['ElInputNumber']>
export const LazyElInputTag: LazyComponent<typeof import("../node_modules/element-plus/es/components/input-tag/index")['ElInputTag']>
export const LazyElMain: LazyComponent<typeof import("../node_modules/element-plus/es/components/container/index")['ElMain']>
export const LazyElLink: LazyComponent<typeof import("../node_modules/element-plus/es/components/link/index")['ElLink']>
export const LazyElMenu: LazyComponent<typeof import("../node_modules/element-plus/es/components/menu/index")['ElMenu']>
export const LazyElMenuItem: LazyComponent<typeof import("../node_modules/element-plus/es/components/menu/index")['ElMenuItem']>
export const LazyElMention: LazyComponent<typeof import("../node_modules/element-plus/es/components/mention/index")['ElMention']>
export const LazyElMenuItemGroup: LazyComponent<typeof import("../node_modules/element-plus/es/components/menu/index")['ElMenuItemGroup']>
export const LazyElOption: LazyComponent<typeof import("../node_modules/element-plus/es/components/select/index")['ElOption']>
export const LazyElOverlay: LazyComponent<typeof import("../node_modules/element-plus/es/components/overlay/index")['ElOverlay']>
export const LazyElOptionGroup: LazyComponent<typeof import("../node_modules/element-plus/es/components/select/index")['ElOptionGroup']>
export const LazyElPagination: LazyComponent<typeof import("../node_modules/element-plus/es/components/pagination/index")['ElPagination']>
export const LazyElPageHeader: LazyComponent<typeof import("../node_modules/element-plus/es/components/page-header/index")['ElPageHeader']>
export const LazyElPopconfirm: LazyComponent<typeof import("../node_modules/element-plus/es/components/popconfirm/index")['ElPopconfirm']>
export const LazyElPopover: LazyComponent<typeof import("../node_modules/element-plus/es/components/popover/index")['ElPopover']>
export const LazyElPopper: LazyComponent<typeof import("../node_modules/element-plus/es/components/popper/index")['ElPopper']>
export const LazyElPopperArrow: LazyComponent<typeof import("../node_modules/element-plus/es/components/popper/index")['ElPopperArrow']>
export const LazyElPopperContent: LazyComponent<typeof import("../node_modules/element-plus/es/components/popper/index")['ElPopperContent']>
export const LazyElPopperTrigger: LazyComponent<typeof import("../node_modules/element-plus/es/components/popper/index")['ElPopperTrigger']>
export const LazyElProgress: LazyComponent<typeof import("../node_modules/element-plus/es/components/progress/index")['ElProgress']>
export const LazyElRadio: LazyComponent<typeof import("../node_modules/element-plus/es/components/radio/index")['ElRadio']>
export const LazyElRadioButton: LazyComponent<typeof import("../node_modules/element-plus/es/components/radio/index")['ElRadioButton']>
export const LazyElRadioGroup: LazyComponent<typeof import("../node_modules/element-plus/es/components/radio/index")['ElRadioGroup']>
export const LazyElRate: LazyComponent<typeof import("../node_modules/element-plus/es/components/rate/index")['ElRate']>
export const LazyElRow: LazyComponent<typeof import("../node_modules/element-plus/es/components/row/index")['ElRow']>
export const LazyElScrollbar: LazyComponent<typeof import("../node_modules/element-plus/es/components/scrollbar/index")['ElScrollbar']>
export const LazyElSegmented: LazyComponent<typeof import("../node_modules/element-plus/es/components/segmented/index")['ElSegmented']>
export const LazyElSelect: LazyComponent<typeof import("../node_modules/element-plus/es/components/select/index")['ElSelect']>
export const LazyElSelectV2: LazyComponent<typeof import("../node_modules/element-plus/es/components/select-v2/index")['ElSelectV2']>
export const LazyElSkeleton: LazyComponent<typeof import("../node_modules/element-plus/es/components/skeleton/index")['ElSkeleton']>
export const LazyElSkeletonItem: LazyComponent<typeof import("../node_modules/element-plus/es/components/skeleton/index")['ElSkeletonItem']>
export const LazyElSlider: LazyComponent<typeof import("../node_modules/element-plus/es/components/slider/index")['ElSlider']>
export const LazyElSpace: LazyComponent<typeof import("../node_modules/element-plus/es/components/space/index")['ElSpace']>
export const LazyElStatistic: LazyComponent<typeof import("../node_modules/element-plus/es/components/statistic/index")['ElStatistic']>
export const LazyElStep: LazyComponent<typeof import("../node_modules/element-plus/es/components/steps/index")['ElStep']>
export const LazyElSteps: LazyComponent<typeof import("../node_modules/element-plus/es/components/steps/index")['ElSteps']>
export const LazyElResult: LazyComponent<typeof import("../node_modules/element-plus/es/components/result/index")['ElResult']>
export const LazyElSubMenu: LazyComponent<typeof import("../node_modules/element-plus/es/components/menu/index")['ElSubMenu']>
export const LazyElSwitch: LazyComponent<typeof import("../node_modules/element-plus/es/components/switch/index")['ElSwitch']>
export const LazyElTabPane: LazyComponent<typeof import("../node_modules/element-plus/es/components/tabs/index")['ElTabPane']>
export const LazyElTable: LazyComponent<typeof import("../node_modules/element-plus/es/components/table/index")['ElTable']>
export const LazyElTableColumn: LazyComponent<typeof import("../node_modules/element-plus/es/components/table/index")['ElTableColumn']>
export const LazyElTableV2: LazyComponent<typeof import("../node_modules/element-plus/es/components/table-v2/index")['ElTableV2']>
export const LazyElTabs: LazyComponent<typeof import("../node_modules/element-plus/es/components/tabs/index")['ElTabs']>
export const LazyElTag: LazyComponent<typeof import("../node_modules/element-plus/es/components/tag/index")['ElTag']>
export const LazyElText: LazyComponent<typeof import("../node_modules/element-plus/es/components/text/index")['ElText']>
export const LazyElTimePicker: LazyComponent<typeof import("../node_modules/element-plus/es/components/time-picker/index")['ElTimePicker']>
export const LazyElTimeSelect: LazyComponent<typeof import("../node_modules/element-plus/es/components/time-select/index")['ElTimeSelect']>
export const LazyElTimeline: LazyComponent<typeof import("../node_modules/element-plus/es/components/timeline/index")['ElTimeline']>
export const LazyElTimelineItem: LazyComponent<typeof import("../node_modules/element-plus/es/components/timeline/index")['ElTimelineItem']>
export const LazyElTooltip: LazyComponent<typeof import("../node_modules/element-plus/es/components/tooltip/index")['ElTooltip']>
export const LazyElTour: LazyComponent<typeof import("../node_modules/element-plus/es/components/tour/index")['ElTour']>
export const LazyElTourStep: LazyComponent<typeof import("../node_modules/element-plus/es/components/tour/index")['ElTourStep']>
export const LazyElTransfer: LazyComponent<typeof import("../node_modules/element-plus/es/components/transfer/index")['ElTransfer']>
export const LazyElTree: LazyComponent<typeof import("../node_modules/element-plus/es/components/tree/index")['ElTree']>
export const LazyElTreeSelect: LazyComponent<typeof import("../node_modules/element-plus/es/components/tree-select/index")['ElTreeSelect']>
export const LazyElUpload: LazyComponent<typeof import("../node_modules/element-plus/es/components/upload/index")['ElUpload']>
export const LazyElTreeV2: LazyComponent<typeof import("../node_modules/element-plus/es/components/tree-v2/index")['ElTreeV2']>
export const LazyElWatermark: LazyComponent<typeof import("../node_modules/element-plus/es/components/watermark/index")['ElWatermark']>
export const LazyElIconAddLocation: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['AddLocation']>
export const LazyElIconAlarmClock: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['AlarmClock']>
export const LazyElIconAim: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Aim']>
export const LazyElIconApple: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Apple']>
export const LazyElIconArrowDown: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowDown']>
export const LazyElIconArrowDownBold: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowDownBold']>
export const LazyElIconArrowLeft: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowLeft']>
export const LazyElIconArrowLeftBold: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowLeftBold']>
export const LazyElIconArrowRight: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowRight']>
export const LazyElIconArrowRightBold: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowRightBold']>
export const LazyElIconArrowUp: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowUp']>
export const LazyElIconArrowUpBold: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ArrowUpBold']>
export const LazyElIconAvatar: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Avatar']>
export const LazyElIconBack: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Back']>
export const LazyElIconBasketball: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Basketball']>
export const LazyElIconBaseball: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Baseball']>
export const LazyElIconBell: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Bell']>
export const LazyElIconBellFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['BellFilled']>
export const LazyElIconBicycle: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Bicycle']>
export const LazyElIconBottomLeft: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['BottomLeft']>
export const LazyElIconBottomRight: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['BottomRight']>
export const LazyElIconBottom: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Bottom']>
export const LazyElIconBox: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Box']>
export const LazyElIconBriefcase: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Briefcase']>
export const LazyElIconBowl: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Bowl']>
export const LazyElIconBurger: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Burger']>
export const LazyElIconBrush: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Brush']>
export const LazyElIconBrushFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['BrushFilled']>
export const LazyElIconCamera: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Camera']>
export const LazyElIconCalendar: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Calendar']>
export const LazyElIconCameraFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CameraFilled']>
export const LazyElIconCaretBottom: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CaretBottom']>
export const LazyElIconCaretLeft: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CaretLeft']>
export const LazyElIconCaretTop: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CaretTop']>
export const LazyElIconCaretRight: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CaretRight']>
export const LazyElIconCellphone: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Cellphone']>
export const LazyElIconChatDotRound: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatDotRound']>
export const LazyElIconChatDotSquare: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatDotSquare']>
export const LazyElIconChatLineSquare: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatLineSquare']>
export const LazyElIconChatSquare: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatSquare']>
export const LazyElIconChatLineRound: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatLineRound']>
export const LazyElIconCheck: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Check']>
export const LazyElIconChatRound: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChatRound']>
export const LazyElIconChecked: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Checked']>
export const LazyElIconCherry: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Cherry']>
export const LazyElIconChicken: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Chicken']>
export const LazyElIconCircleCheck: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CircleCheck']>
export const LazyElIconChromeFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ChromeFilled']>
export const LazyElIconCircleCheckFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CircleCheckFilled']>
export const LazyElIconCircleClose: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CircleClose']>
export const LazyElIconCircleCloseFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CircleCloseFilled']>
export const LazyElIconCirclePlus: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CirclePlus']>
export const LazyElIconCirclePlusFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CirclePlusFilled']>
export const LazyElIconClock: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Clock']>
export const LazyElIconClose: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Close']>
export const LazyElIconCloseBold: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CloseBold']>
export const LazyElIconCloudy: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Cloudy']>
export const LazyElIconCoffee: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Coffee']>
export const LazyElIconCoffeeCup: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CoffeeCup']>
export const LazyElIconCoin: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Coin']>
export const LazyElIconColdDrink: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ColdDrink']>
export const LazyElIconCollection: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Collection']>
export const LazyElIconCollectionTag: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CollectionTag']>
export const LazyElIconComment: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Comment']>
export const LazyElIconCompass: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Compass']>
export const LazyElIconConnection: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Connection']>
export const LazyElIconCoordinate: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Coordinate']>
export const LazyElIconCopyDocument: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CopyDocument']>
export const LazyElIconCrop: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Crop']>
export const LazyElIconCreditCard: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['CreditCard']>
export const LazyElIconCpu: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Cpu']>
export const LazyElIconDArrowLeft: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DArrowLeft']>
export const LazyElIconDArrowRight: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DArrowRight']>
export const LazyElIconDataAnalysis: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DataAnalysis']>
export const LazyElIconDataBoard: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DataBoard']>
export const LazyElIconDCaret: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DCaret']>
export const LazyElIconDelete: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Delete']>
export const LazyElIconDeleteLocation: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DeleteLocation']>
export const LazyElIconDeleteFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DeleteFilled']>
export const LazyElIconDataLine: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DataLine']>
export const LazyElIconDessert: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Dessert']>
export const LazyElIconDiscount: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Discount']>
export const LazyElIconDish: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Dish']>
export const LazyElIconDishDot: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DishDot']>
export const LazyElIconDocument: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Document']>
export const LazyElIconDocumentAdd: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentAdd']>
export const LazyElIconDocumentChecked: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentChecked']>
export const LazyElIconDocumentCopy: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentCopy']>
export const LazyElIconDocumentDelete: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentDelete']>
export const LazyElIconDocumentRemove: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['DocumentRemove']>
export const LazyElIconDownload: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Download']>
export const LazyElIconDrizzling: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Drizzling']>
export const LazyElIconEdit: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Edit']>
export const LazyElIconEditPen: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['EditPen']>
export const LazyElIconEleme: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Eleme']>
export const LazyElIconElemeFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ElemeFilled']>
export const LazyElIconElementPlus: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ElementPlus']>
export const LazyElIconExpand: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Expand']>
export const LazyElIconFailed: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Failed']>
export const LazyElIconFemale: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Female']>
export const LazyElIconFiles: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Files']>
export const LazyElIconFilm: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Film']>
export const LazyElIconFilter: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Filter']>
export const LazyElIconFinished: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Finished']>
export const LazyElIconFirstAidKit: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FirstAidKit']>
export const LazyElIconFlag: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Flag']>
export const LazyElIconFold: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Fold']>
export const LazyElIconFolder: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Folder']>
export const LazyElIconFolderAdd: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderAdd']>
export const LazyElIconFolderChecked: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderChecked']>
export const LazyElIconFolderDelete: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderDelete']>
export const LazyElIconFolderOpened: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderOpened']>
export const LazyElIconFolderRemove: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FolderRemove']>
export const LazyElIconFood: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Food']>
export const LazyElIconFootball: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Football']>
export const LazyElIconForkSpoon: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ForkSpoon']>
export const LazyElIconFries: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Fries']>
export const LazyElIconFullScreen: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['FullScreen']>
export const LazyElIconGoblet: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Goblet']>
export const LazyElIconGobletFull: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GobletFull']>
export const LazyElIconGobletSquare: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GobletSquare']>
export const LazyElIconGobletSquareFull: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GobletSquareFull']>
export const LazyElIconGoldMedal: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GoldMedal']>
export const LazyElIconGoods: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Goods']>
export const LazyElIconGrid: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Grid']>
export const LazyElIconGoodsFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['GoodsFilled']>
export const LazyElIconGuide: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Guide']>
export const LazyElIconGrape: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Grape']>
export const LazyElIconHeadset: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Headset']>
export const LazyElIconHandbag: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Handbag']>
export const LazyElIconHelp: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Help']>
export const LazyElIconHelpFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['HelpFilled']>
export const LazyElIconHide: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Hide']>
export const LazyElIconHomeFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['HomeFilled']>
export const LazyElIconHotWater: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['HotWater']>
export const LazyElIconHouse: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['House']>
export const LazyElIconHistogram: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Histogram']>
export const LazyElIconIceCream: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceCream']>
export const LazyElIconIceCreamRound: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceCreamRound']>
export const LazyElIconIceDrink: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceDrink']>
export const LazyElIconIceTea: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceTea']>
export const LazyElIconInfoFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['InfoFilled']>
export const LazyElIconIphone: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Iphone']>
export const LazyElIconIceCreamSquare: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['IceCreamSquare']>
export const LazyElIconKey: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Key']>
export const LazyElIconKnifeFork: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['KnifeFork']>
export const LazyElIconLightning: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Lightning']>
export const LazyElIconLink: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Link']>
export const LazyElIconLocation: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Location']>
export const LazyElIconLocationFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['LocationFilled']>
export const LazyElIconLoading: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Loading']>
export const LazyElIconLock: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Lock']>
export const LazyElIconLollipop: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Lollipop']>
export const LazyElIconList: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['List']>
export const LazyElIconLocationInformation: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['LocationInformation']>
export const LazyElIconMagicStick: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MagicStick']>
export const LazyElIconMagnet: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Magnet']>
export const LazyElIconMale: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Male']>
export const LazyElIconMapLocation: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MapLocation']>
export const LazyElIconMemo: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Memo']>
export const LazyElIconManagement: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Management']>
export const LazyElIconMedal: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Medal']>
export const LazyElIconMenu: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Menu']>
export const LazyElIconMessage: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Message']>
export const LazyElIconMessageBox: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MessageBox']>
export const LazyElIconMicrophone: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Microphone']>
export const LazyElIconMic: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Mic']>
export const LazyElIconMilkTea: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MilkTea']>
export const LazyElIconMinus: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Minus']>
export const LazyElIconMonitor: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Monitor']>
export const LazyElIconMoney: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Money']>
export const LazyElIconMoon: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Moon']>
export const LazyElIconMoonNight: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MoonNight']>
export const LazyElIconMoreFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MoreFilled']>
export const LazyElIconMouse: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Mouse']>
export const LazyElIconMostlyCloudy: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MostlyCloudy']>
export const LazyElIconMore: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['More']>
export const LazyElIconMuteNotification: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['MuteNotification']>
export const LazyElIconMute: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Mute']>
export const LazyElIconNotebook: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Notebook']>
export const LazyElIconMug: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Mug']>
export const LazyElIconNotification: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Notification']>
export const LazyElIconNoSmoking: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['NoSmoking']>
export const LazyElIconOfficeBuilding: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['OfficeBuilding']>
export const LazyElIconOpen: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Open']>
export const LazyElIconOperation: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Operation']>
export const LazyElIconOpportunity: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Opportunity']>
export const LazyElIconOrange: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Orange']>
export const LazyElIconPaperclip: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Paperclip']>
export const LazyElIconPartlyCloudy: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PartlyCloudy']>
export const LazyElIconPear: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Pear']>
export const LazyElIconOdometer: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Odometer']>
export const LazyElIconPhone: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Phone']>
export const LazyElIconPhoneFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PhoneFilled']>
export const LazyElIconPictureFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PictureFilled']>
export const LazyElIconPictureRounded: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PictureRounded']>
export const LazyElIconPicture: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Picture']>
export const LazyElIconPieChart: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PieChart']>
export const LazyElIconPlace: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Place']>
export const LazyElIconPlatform: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Platform']>
export const LazyElIconPlus: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Plus']>
export const LazyElIconPointer: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Pointer']>
export const LazyElIconPosition: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Position']>
export const LazyElIconPostcard: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Postcard']>
export const LazyElIconPouring: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Pouring']>
export const LazyElIconPresent: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Present']>
export const LazyElIconPriceTag: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['PriceTag']>
export const LazyElIconPrinter: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Printer']>
export const LazyElIconPromotion: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Promotion']>
export const LazyElIconQuartzWatch: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['QuartzWatch']>
export const LazyElIconQuestionFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['QuestionFilled']>
export const LazyElIconRank: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Rank']>
export const LazyElIconReading: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Reading']>
export const LazyElIconReadingLamp: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ReadingLamp']>
export const LazyElIconRefresh: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Refresh']>
export const LazyElIconRefreshRight: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['RefreshRight']>
export const LazyElIconRefreshLeft: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['RefreshLeft']>
export const LazyElIconRefrigerator: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Refrigerator']>
export const LazyElIconRemove: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Remove']>
export const LazyElIconRemoveFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['RemoveFilled']>
export const LazyElIconScaleToOriginal: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ScaleToOriginal']>
export const LazyElIconRight: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Right']>
export const LazyElIconScissor: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Scissor']>
export const LazyElIconSearch: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Search']>
export const LazyElIconSelect: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Select']>
export const LazyElIconSchool: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['School']>
export const LazyElIconSell: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sell']>
export const LazyElIconService: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Service']>
export const LazyElIconSetUp: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SetUp']>
export const LazyElIconSetting: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Setting']>
export const LazyElIconShare: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Share']>
export const LazyElIconShip: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Ship']>
export const LazyElIconShop: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Shop']>
export const LazyElIconShoppingBag: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ShoppingBag']>
export const LazyElIconSoccer: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Soccer']>
export const LazyElIconShoppingCart: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ShoppingCart']>
export const LazyElIconSmoking: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Smoking']>
export const LazyElIconShoppingTrolley: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ShoppingTrolley']>
export const LazyElIconShoppingCartFull: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ShoppingCartFull']>
export const LazyElIconSort: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sort']>
export const LazyElIconSemiSelect: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SemiSelect']>
export const LazyElIconSortDown: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SortDown']>
export const LazyElIconStamp: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Stamp']>
export const LazyElIconSortUp: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SortUp']>
export const LazyElIconStar: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Star']>
export const LazyElIconStarFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['StarFilled']>
export const LazyElIconStopwatch: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Stopwatch']>
export const LazyElIconSugar: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sugar']>
export const LazyElIconSoldOut: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SoldOut']>
export const LazyElIconSuccessFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SuccessFilled']>
export const LazyElIconSuitcase: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Suitcase']>
export const LazyElIconSuitcaseLine: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SuitcaseLine']>
export const LazyElIconSunset: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sunset']>
export const LazyElIconSwitch: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Switch']>
export const LazyElIconSwitchButton: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SwitchButton']>
export const LazyElIconTakeawayBox: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TakeawayBox']>
export const LazyElIconSwitchFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['SwitchFilled']>
export const LazyElIconTicket: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Ticket']>
export const LazyElIconTimer: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Timer']>
export const LazyElIconTickets: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Tickets']>
export const LazyElIconToiletPaper: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ToiletPaper']>
export const LazyElIconTools: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Tools']>
export const LazyElIconTop: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Top']>
export const LazyElIconTopLeft: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TopLeft']>
export const LazyElIconTrendCharts: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TrendCharts']>
export const LazyElIconTrophy: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Trophy']>
export const LazyElIconTrophyBase: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TrophyBase']>
export const LazyElIconSunrise: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sunrise']>
export const LazyElIconTurnOff: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TurnOff']>
export const LazyElIconUnlock: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Unlock']>
export const LazyElIconUpload: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Upload']>
export const LazyElIconTopRight: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['TopRight']>
export const LazyElIconUmbrella: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Umbrella']>
export const LazyElIconUploadFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['UploadFilled']>
export const LazyElIconUser: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['User']>
export const LazyElIconVan: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Van']>
export const LazyElIconVideoCameraFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['VideoCameraFilled']>
export const LazyElIconVideoCamera: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['VideoCamera']>
export const LazyElIconVideoPause: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['VideoPause']>
export const LazyElIconUserFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['UserFilled']>
export const LazyElIconVideoPlay: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['VideoPlay']>
export const LazyElIconView: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['View']>
export const LazyElIconWalletFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['WalletFilled']>
export const LazyElIconWarnTriangleFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['WarnTriangleFilled']>
export const LazyElIconWarningFilled: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['WarningFilled']>
export const LazyElIconWarning: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Warning']>
export const LazyElIconWatch: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Watch']>
export const LazyElIconWallet: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Wallet']>
export const LazyElIconWatermelon: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Watermelon']>
export const LazyElIconWindPower: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['WindPower']>
export const LazyElIconSunny: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['Sunny']>
export const LazyElIconZoomIn: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ZoomIn']>
export const LazyElIconZoomOut: LazyComponent<typeof import("../node_modules/@element-plus/icons-vue/dist/index")['ZoomOut']>
export const LazyIcon: LazyComponent<typeof import("../node_modules/@nuxt/icon/dist/runtime/components/index")['default']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>

export const componentNames: string[]
