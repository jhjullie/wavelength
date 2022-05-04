import java.util.*;

public class MusicTaste {
    public Set<String> genres;
    public Set<String> songs;

    public MusicTaste() {
        genres = new HashSet<String>();
        songs = new HashSet<Song>();
    }

    public void addGenre(string g) {
        genres.add(g);
    }

    public void addSong(Song s) {
        songs.add(s);
    }

    public int compareMusicTaste(MusicTaste m) {
        int score = 0;
        Iterator<String> g = genres.iterator();
        Iterator<Song> s = genres.iterator();

        while (g.hasNext()) {
            if ((m.genres).contains(g.next())) {
                score++;
            }
        }

        while (s.hasNext()) {
            if ((m.songs).contains(s.next())) {
                score++;
            }
        }

        return score;
    }
}
 