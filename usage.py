import dash
from dash import html
import feffery_antd_components as fac

app = dash.Dash(__name__)

app.layout = html.Div(
    [
        fac.AntdSpace(
            [
                fac.AntdIcon(
                    icon=icon,
                    style={
                        'fontSize': 20
                    }
                )
                for icon in [
                    'pi-circle',
                    'pi-polygon',
                    'pi-map-pin',
                    'pi-line-segment',
                    'pi-line-segments',
                    'pi-trash-simple',
                    'pi-trash',
                    'pi-ruler',
                    'pi-selection',
                    'pi-selection-slash',
                    'pi-square-split-horizontal',
                    'pi-square-split-vertical',
                    'pi-stack-simple',
                    'pi-stack',
                    'pi-navigation-arrow',
                    'pi-map-trifold',
                    'pi-info',
                    'pi-lock-key-open',
                    'pi-lock-key',
                    'pi-gear',
                    'pi-airplane',
                    'pi-anchor-simple',
                    'pi-arrow-arc-left',
                    'pi-arrow-arc-right',
                    'pi-arrow-clockwise',
                    'pi-arrow-counter-clockwise',
                    'pi-barricade',
                    'pi-binoculars',
                    'pi-bounding-box',
                    'pi-broom',
                    'pi-buildings',
                    'pi-calculator',
                    'pi-camera',
                    'pi-circuitry',
                    'pi-clipboard',
                    'pi-compass',
                    'pi-copy',
                    'pi-cpu',
                    'pi-crosshair',
                    'pi-cube-focus',
                    'pi-cube',
                    'pi-cursor',
                    'pi-database',
                    'pi-eye-slash',
                    'pi-eye',
                    'pi-faders',
                    'pi-floppy-disk',
                ]
            ],
            wrap=True
        )
    ],
    style={
        'padding': 50
    }
)

if __name__ == '__main__':
    app.run(debug=True)
