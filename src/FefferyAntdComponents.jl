
module FefferyAntdComponents
using Dash

const resources_path = realpath(joinpath( @__DIR__, "..", "deps"))
const version = "0.2.0-rc15"

include("jl/'feffery'_antdaccordion.jl")
include("jl/'feffery'_antdaffix.jl")
include("jl/'feffery'_antdalert.jl")
include("jl/'feffery'_antdanchor.jl")
include("jl/'feffery'_antdavatar.jl")
include("jl/'feffery'_antdbacktop.jl")
include("jl/'feffery'_antdbadge.jl")
include("jl/'feffery'_antdbreadcrumb.jl")
include("jl/'feffery'_antdbutton.jl")
include("jl/'feffery'_antdcalendar.jl")
include("jl/'feffery'_antdcarousel.jl")
include("jl/'feffery'_antdcascader.jl")
include("jl/'feffery'_antdcheckbox.jl")
include("jl/'feffery'_antdcheckboxgroup.jl")
include("jl/'feffery'_antdcollapse.jl")
include("jl/'feffery'_antdcomment.jl")
include("jl/'feffery'_antdconfigprovider.jl")
include("jl/'feffery'_antdcopytext.jl")
include("jl/'feffery'_antdcountdown.jl")
include("jl/'feffery'_antddatepicker.jl")
include("jl/'feffery'_antddaterangepicker.jl")
include("jl/'feffery'_antddivider.jl")
include("jl/'feffery'_antddrawer.jl")
include("jl/'feffery'_antddropdown.jl")
include("jl/'feffery'_antdempty.jl")
include("jl/'feffery'_antdicon.jl")
include("jl/'feffery'_antdimage.jl")
include("jl/'feffery'_antdinput.jl")
include("jl/'feffery'_antdinputnumber.jl")
include("jl/'feffery'_antdmentions.jl")
include("jl/'feffery'_antdmenu.jl")
include("jl/'feffery'_antdmessage.jl")
include("jl/'feffery'_antdmodal.jl")
include("jl/'feffery'_antdnotification.jl")
include("jl/'feffery'_antdpageheader.jl")
include("jl/'feffery'_antdpagination.jl")
include("jl/'feffery'_antdpasteimage.jl")
include("jl/'feffery'_antdpopconfirm.jl")
include("jl/'feffery'_antdpopover.jl")
include("jl/'feffery'_antdpopupcard.jl")
include("jl/'feffery'_antdprogress.jl")
include("jl/'feffery'_antdradiogroup.jl")
include("jl/'feffery'_antdrate.jl")
include("jl/'feffery'_antdresult.jl")
include("jl/'feffery'_antdribbon.jl")
include("jl/'feffery'_antdsegmented.jl")
include("jl/'feffery'_antdsegmentedcoloring.jl")
include("jl/'feffery'_antdselect.jl")
include("jl/'feffery'_antdslider.jl")
include("jl/'feffery'_antdspace.jl")
include("jl/'feffery'_antdspin.jl")
include("jl/'feffery'_antdstatistic.jl")
include("jl/'feffery'_antdsteps.jl")
include("jl/'feffery'_antdswitch.jl")
include("jl/'feffery'_antdtable.jl")
include("jl/'feffery'_antdtag.jl")
include("jl/'feffery'_antdtimeline.jl")
include("jl/'feffery'_antdtimepicker.jl")
include("jl/'feffery'_antdtimerangepicker.jl")
include("jl/'feffery'_antdtooltip.jl")
include("jl/'feffery'_antdtransfer.jl")
include("jl/'feffery'_antdtree.jl")
include("jl/'feffery'_antdtreeselect.jl")
include("jl/'feffery'_antdwatermark.jl")
include("jl/'feffery'_antdcard.jl")
include("jl/'feffery'_antdcardgrid.jl")
include("jl/'feffery'_antdcheckcard.jl")
include("jl/'feffery'_antdcheckcardgroup.jl")
include("jl/'feffery'_antddescriptionitem.jl")
include("jl/'feffery'_antddescriptions.jl")
include("jl/'feffery'_antdform.jl")
include("jl/'feffery'_antdformitem.jl")
include("jl/'feffery'_antdcol.jl")
include("jl/'feffery'_antdrow.jl")
include("jl/'feffery'_antdcontent.jl")
include("jl/'feffery'_antdfooter.jl")
include("jl/'feffery'_antdheader.jl")
include("jl/'feffery'_antdlayout.jl")
include("jl/'feffery'_antdsider.jl")
include("jl/'feffery'_antdcustomskeleton.jl")
include("jl/'feffery'_antdskeleton.jl")
include("jl/'feffery'_antdskeletonavatar.jl")
include("jl/'feffery'_antdskeletonbutton.jl")
include("jl/'feffery'_antdskeletonimage.jl")
include("jl/'feffery'_antdskeletoninput.jl")
include("jl/'feffery'_antdtabpane.jl")
include("jl/'feffery'_antdtabs.jl")
include("jl/'feffery'_antdparagraph.jl")
include("jl/'feffery'_antdtext.jl")
include("jl/'feffery'_antdtitle.jl")
include("jl/'feffery'_antddraggerupload.jl")
include("jl/'feffery'_antdpictureupload.jl")
include("jl/'feffery'_antdupload.jl")

function __init__()
    DashBase.register_package(
        DashBase.ResourcePkg(
            "feffery_antd_components",
            resources_path,
            version = version,
            [
                DashBase.Resource(
    relative_package_path = "feffery_antd_components.min.js",
    external_url = "https://unpkg.com/feffery_antd_components@0.2.0-rc15/feffery_antd_components/feffery_antd_components.min.js",
    dynamic = nothing,
    async = nothing,
    type = :js
),
DashBase.Resource(
    relative_package_path = "feffery_antd_components.min.js.map",
    external_url = "https://unpkg.com/feffery_antd_components@0.2.0-rc15/feffery_antd_components/feffery_antd_components.min.js.map",
    dynamic = true,
    async = nothing,
    type = :js
)
            ]
        )

    )
end
end
