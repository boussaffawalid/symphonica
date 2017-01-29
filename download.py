'''

    download.py
    -----------

    Python script to download all .midi files on a webpage or
    list of webpages. Used to faciliate downloading large
    amounts of midi files of classical music from midiworld.com

'''

import urllib.parse
import urllib.request

from bs4 import BeautifulSoup


def downloadLinks():

    try:
        # headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; WOW64; rv:38.0) Gecko/20100101 Firefox/38.0'}
        html = open('page.html', 'r').read()
        soup = BeautifulSoup(html, 'lxml')
        i = 0

        for tag in soup.findAll('a', href=True):
            link = tag['href']

            if link.endswith('.mid'):
                print('[*] Downloading file...')
                i += 1
                location = 'music/' + str(i) + '.mid'
                urllib.request.urlretrieve(link, location)
                print('[*] Finished downloading file.')

    except Exception:
        print('[!] Error occured.')
        exit()

downloadLinks()
