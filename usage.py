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
                        'fontSize': 20,
                        'color': '#69c0ff'
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
