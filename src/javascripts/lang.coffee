# 1. Put together json k/v lookups for english and french.
# 2. Inline that json in the php file (so they are included server side based on a server / session setting).
# 3. Add the dropdown to the wp admin / curlcast section to pick your default language.
# 4. The php file will try to grab a lang from session / cookie, and fallback to the default settings if one is not found, and fallback to 'en' if the default is not found.
# 5. on the js side, we need to replace all label's with key references. I.e. 'competition_title'.
# 6. on the js side, we need to dynamically sub the label keys with the json values (in the inline json).
# 7. Replace loading... text everywhere with a spinner.
#
#
# Missing translations for:
#  * Bracket / Format names
#  * Event / Group Separator names
#
