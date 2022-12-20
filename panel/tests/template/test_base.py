from panel.config import config
from panel.io.notifications import NotificationArea
from panel.io.state import set_curdoc, state
from panel.template import VanillaTemplate


def test_notification_instantiate_on_config(document):
    with config.set(notifications=True):
        tmpl = VanillaTemplate()

    assert isinstance(tmpl.notifications, NotificationArea)

    doc = tmpl.server_doc(document)

    with set_curdoc(doc):
        assert state.notifications is tmpl.notifications


def test_notification_explicit(document):
    tmpl = VanillaTemplate(notifications=NotificationArea())

    assert isinstance(tmpl.notifications, NotificationArea)

    doc = tmpl.server_doc(document)

    with set_curdoc(doc):
        assert state.notifications is tmpl.notifications